'use client';

import { WebGPUCanvas } from '@/components/canvas';
import { useAspect, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useContext, useMemo } from 'react';
import gsap from 'gsap';

import {
  abs,
  blendScreen,
  oneMinus,
  smoothstep,
  sub,
  texture,
  uniform,
  uv,
  vec3,
} from 'three/tsl';

import * as THREE from 'three/webgpu';
import { useGSAP } from '@gsap/react';
import { PostProcessing } from '@/components/post-processing';
import { ContextProvider, GlobalContext } from '@/context';

import TEXTUREMAP from '@/assets/raw-2.png';
import DEPTHMAP from '@/assets/depth-2.png';
import EDGEMAP from '@/assets/edge-2.png';

import { Allison } from 'next/font/google';
import { ao } from 'three/examples/jsm/tsl/display/GTAONode.js';


const allison = Allison({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const WIDTH = 1600;
const HEIGHT = 900;

const Scene = () => {
  const { setIsLoading } = useContext(GlobalContext);

  const [rawMap, depthMap, edgeMap] = useTexture(
    [TEXTUREMAP.src, DEPTHMAP.src, EDGEMAP.src],
    () => {
      setIsLoading(false);
      rawMap.colorSpace = THREE.SRGBColorSpace;
    }
  );

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);

    const strength = 0.01;

    const tDepthMap = texture(depthMap);
    const tEdgeMap = texture(edgeMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    ).mul(0.5);

    const depth = tDepthMap;

    const flow = sub(1, smoothstep(0, 0.02, abs(depth.sub(uProgress))));

    const mask = oneMinus(tEdgeMap).mul(flow).mul(vec3(10, 0.4, 10));

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
      },
    };
  }, [rawMap, depthMap, edgeMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useGSAP(() => {
    gsap.to(uniforms.uProgress, {
      value: 1,
      repeat: -1,
      duration: 3,
      ease: 'power1.out',
    });
  }, [uniforms.uProgress]);

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh scale={[w, h, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

const Html = () => {
  const { isLoading } = useContext(GlobalContext);

  useGSAP(() => {
    if (!isLoading) {
      gsap
        .timeline()
        .to('[data-loader]', {
          opacity: 0,
        })
        .from('[data-title]', {
          yPercent: -100,
          stagger: {
            each: 0.15,
          },
          ease: 'power1.out',
        })
        .from('[data-desc]', {
          opacity: 0,
          yPercent: 100,
        });
    }
  }, [isLoading]);

  return (
    <div>
      <div
        className="h-svh fixed z-90 bg-indigo-950 pointer-events-none w-full flex justify-center items-center"
        data-loader
      >
        <div className="w-6 h-6 bg-white animate-ping rounded-full"></div>
      </div>
      <div className="h-svh relative">
  {/* Text Container - now takes 90% width and centers content */}
  <div className="absolute z-60 pointer-events-none w-[90%] left-1/2 top-[40vh] -translate-x-1/2 -translate-y-1/2">
    {/* Title Section */}
    <div className="text-center w-full overflow-hidden"
    >
      <HeroText text="Archetype" anim="zoom-in-up" duration="1700"/>
      <HeroText text="Systems" anim="zoom-in-up" duration="1800"/>
    </div>

    {/* Subtitle Sections */}
    <div className="text-right lg:transform-[translateX(-20%)] text-[clamp(2rem,3vw,6rem)] mt-0 overflow-hidden">
      <div className={`whitespace-nowrap ${allison.className}`} data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
        Designing at the edge of possibility
      </div>
    </div>

  </div>


  <WebGPUCanvas>
    <PostProcessing></PostProcessing>
    <Scene></Scene>
  </WebGPUCanvas>
</div>
    </div>
  );
};

interface HeroTextProps {
  text: string;
  anim?: string;
  duration?: string;
}

function HeroText({ text, anim, duration }: HeroTextProps) {
  return (
    <div 
      className="uppercase text-[clamp(2rem,12vw,20rem)] leading-[1] tracking-wider 
      hero-text text-white/90 font-medium text-shadow-4xl"
      data-aos={anim}
      data-aos-duration={duration}
    >
      {text}
    </div>
  );
}


export default function Hero() {
  return (
    <ContextProvider>
      <Html></Html>
    </ContextProvider>
  );
}
