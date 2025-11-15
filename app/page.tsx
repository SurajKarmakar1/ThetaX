import HeroSection from "@/components/hero-section";
import Globe from "@/components/globe";
import Footer from "@/components/footer";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animated-beam-demo-multiple-output";
import { UptimeStatus } from "@/components/uptimestatus";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="relative grid min-h-screen grid-cols-[2.5rem_1fr_auto_1fr_2.5rem] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/10 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
          {/* Left decorative bar */}
          <div className="col-start-1 row-span-full  row-start-1 border-r border-r-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>

          {/* Right decorative bar */}
          <div className="col-start-5 row-span-full row-start-1 border-l border-l-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>

          <div className="col-start-2 col-span-3 row-start-3 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
              <div className="border border-dashed border-neutral-300 mt-1 mb-3">
                <HeroSection />
              </div>
              <div className="border border-dashed border-neutral-300 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl pr-4 pl-4 pb-4">
                <div className="flex-1 w-full md:w-auto mb-4 md:mb-0">
                  <Globe />
                </div>

                <div className="border border-dashed  p-4 w-full md:w-auto shadow-sm">
                  <h2 className=" text-xl font-semibold">Global Operations</h2>

                  <ul className="mt-2 text-gray-600 dark:text-gray-300">
                    <li>
                      Deployed at Changi Airport, Singapore with future
                      operations in India, Taiwan and USA.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-dashed border-neutral-300 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-2 pr-4 pl-4 pb-4">
                <div className="flex-1 w-full md:w-auto mb-4 md:mb-0">
                  <AnimatedBeamMultipleOutputDemo />
                </div>
                <div className="border border-dashed p-6 w-auto md:w-auto shadow-sm ">
                  <h2 className="text-xl font-semibold">
                    Introducing Our 5G Core
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Seamlessly Fecth data with our smart integrated IOT E-sim
                    modules.
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Use the Theta-X adaptive layer and dashboard to monitor
                    everything.
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Blazing fast Automated Security and Rapid Alerts.
                  </p>
                </div>
              </div>
              <div className="border border-dashed border-neutral-300 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-2 pr-2 pl-2 pb-2">
                <UptimeStatus />
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid min-h-screen grid-cols-[2.5rem_1fr_auto_1fr_2.5rem] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/10 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
          {/* Left decorative bar */}
          <div className="col-start-1 row-span-full  row-start-1 border-r border-r-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>

          {/* Right decorative bar */}
          <div className="col-start-5 row-span-full row-start-1 border-l border-l-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
          <div className="col-start-2 col-span-3 row-start-3 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
