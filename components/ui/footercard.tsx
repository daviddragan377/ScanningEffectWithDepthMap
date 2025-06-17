'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { HollowText } from './emphasistext';
import Copyright from './copyright';

export default function FooterCard() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('Sending...');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus('Message sent!');
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus('Failed to send. Try again later.');
        }
      );
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-w-full w-full h-[40em] p-0 m-0 overflow-hidden rounded-t-2xl bg-gradient-to-tr from-zinc-400 to-zinc-100">
      {/* Overlay blueprint image */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <img
          src="/images/blueprint.png"
          alt="Blueprint Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact form */}
      <div className="relative z-20 p-8 h-full w-full max-w-xl flex flex-col justify-center items-center text-black">
        <HollowText text="Contact" />
        <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-mono tracking-wide text-black mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-black/5 backdrop-blur-md border border-black/30 placeholder-black/80 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-mono tracking-wide text-black mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-black/5 backdrop-blur-md border border-black/30 placeholder-black/80 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-mono tracking-wide text-black mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg bg-black/5 backdrop-blur-md border border-black/30 placeholder-black/80 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
              placeholder="Say something..."
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-6 py-2 rounded-lg hover:bg-black/70 bg-blur-[8px] text-white font-semibold bg-black/90 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
          {status && (
            <p className="text-sm text-center font-mono mt-2 text-black/80">{status}</p>
          )}
        </form>
      </div>
      <Copyright />
    </section>
  );
}
