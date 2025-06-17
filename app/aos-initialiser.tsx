'use client';

import { useEffect } from 'react';
// @ts-expect-error
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInitialiser() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return null;
}
