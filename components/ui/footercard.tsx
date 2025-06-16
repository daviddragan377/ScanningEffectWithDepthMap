"use client";

import { HollowText } from "./emphasistext";
import Copyright from "./copyright";

export default function FooterCard() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-w-full w-full h-[40em] p-0 m-0 overflow-hidden rounded-t-2xl bg-gradient-to-tr from-zinc-400 to-zinc-100"
    >
      {/* Overlay blueprint image on top of gradient but under content */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <img
          src="/images/blueprint.png"
          alt="Blueprint Overlay"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact form content */}
      <div className="relative z-20 p-8 h-full w-full max-w-xl flex flex-col justify-center items-center text-black">
        <HollowText text="Contact" />
        <form className="w-full space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-mono tracking-wide text-black mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-black/5 backdrop-blur-md border border-black/30 placeholder-black/80 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-mono tracking-wide text-black mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-black/5 backdrop-blur-md border border-black/30 placeholder-black/80 text-black focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-mono tracking-wide text-black mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
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
        </form>
      </div>

      <Copyright />
    </section>
  );
}
