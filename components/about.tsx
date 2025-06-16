import EmphasisText, { HollowText } from "./ui/emphasistext";

export default function AboutUs() {
  return (
    <section className=" text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <HollowText text="About Us" color="text-white" />

        {/* Responsive two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* left */}
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img
              src="/images/avatar.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover 
                        shadow-[0_10px_40px_rgba(0,0,0,0.4)] 
                        border border-white/10 
                        backdrop-blur-[2px] my-8"
            />

            <h2 className="text-3xl leading-relaxed">
              We build elegant, innovative solutions for hyper-niche businesses that think <EmphasisText text="differently" size="text-5xl" />
            </h2>
          </div>

          
          {/* right  */}
          <div>
            <p className="text-xl mb-4">Our Story</p>
            <hr className="border-white/30 mb-6"/>

            <div className="relative space-y-12">
              {/* Vertical line for timeline*/}
              <div className="absolute left-[5px] top-0 h-full w-0.5 bg-white"></div>

              {/* Timeline Item 1 */}
              <div className="relative flex items-start gap-6">
                <div className="w-8 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-white mt-1.5"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">A faithful leap into the unknown.</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-200">
                    I founded Archetype Systems when I moved to Bali after graduating in London. No job lined up, no fixed direction, just an insatiable curiosity and a quiet urge to dismantle everything familiar.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-start gap-6">
                <div className="w-8 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-white mt-1.5"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Revelation</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-200">
                    Immersed in a radically different rhythm of life, I found clarity in the contrast. The noise of over-engineered systems and design for design&apos;s sake began to fall away. What remained was a sharpened focus on what truly matters: clarity, function, and intention.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-start gap-6">
                <div className="w-8 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-white mt-1.5"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Clarity into Craft</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-200">
                    Today, we work with small and growing businesses to uncover inefficiencies hidden in plain sight. We design solutions that are elegant, efficient, and deeply considered — tools that enable rather than obstruct.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}