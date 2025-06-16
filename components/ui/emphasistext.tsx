import { Allison } from 'next/font/google';

const allison = Allison({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function EmphasisText({text, size}: { text: string, size?: string }) {
  return (
    <span className={`${allison.className} ${size} text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-pink-500`}>
      {text}
    </span>
  );
}

interface HollowTextProps {
  text: string;
  color?: string;
  tailwindClass?: string;
}

export function HollowText({text, color, tailwindClass}: HollowTextProps) {
  return (
    <h2 className={`text-[clamp(4rem,5.5vw,7.5rem)] lg:text-[clamp(4rem,6.5vw,9rem)] mb-6 text-center hollow-text ${color || 'text-black'} ${tailwindClass || ''}`}>{text}</h2>
  );
}