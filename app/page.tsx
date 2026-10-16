import Image from "next/image";
import Nav from "@/components/nav";
import ThemeSwitcher from "@/components/theme-switcher";
import Devices from "@/components/devices";
import { DOWNLOAD_URL, GITHUB_URL, ISSUES_URL } from "@/lib/links";

const features = [
  { title: "Bookmarks and library", text: "Save sites and keep them organized in one place." },
  { title: "History that cleans itself", text: "Choose how long Ovra keeps your history, and it deletes the rest for you." },
  { title: "Your search engine", text: "Search with Google, Bing, Yahoo or DuckDuckGo, right from the address bar." },
  { title: "A smarter address bar", text: "Suggestions from the web and your own history as you type." },
  { title: "Automatic updates", text: "New versions install themselves, so you're always on the latest Ovra." },
  { title: "Native to the Mac", text: "Written in Swift on Apple's WebKit, so it feels at home on macOS." },
  { title: "Tabs in a sidebar", text: "Your tabs and library live in a glass sidebar. Hide it when you want the whole window." },
  { title: "Back up and move", text: "Save your settings, themes, favorites and bookmarks to one file and restore them on any Mac." },
  { title: "Privacy at a glance", text: "Click the shield in the address bar to see cookies and storage for a site, and clear them in one click." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="overflow-hidden pt-16 text-center sm:pt-24">
          <div className="mx-auto max-w-[1024px] px-5">
            <Image src="/ovra-icon.png" alt="Ovra app icon" width={112} height={112} priority className="mx-auto" />
            <h1 className="mt-6 text-[clamp(3.5rem,10vw,6rem)] font-semibold leading-[1.02] tracking-[-0.02em]">Ovra</h1>
            <p className="mx-auto mt-3 max-w-[22ch] text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.01em]">
              The browser that follows you.
            </p>
            <p className="mx-auto mt-5 max-w-[46ch] text-balance text-[19px] text-steel">
              Fast, built on WebKit and made for the Mac. Sign in once and your tabs, bookmarks and history come with
              you. iPhone and iPad coming soon.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a href={DOWNLOAD_URL} className="pill">
                Download for Mac
              </a>
              <a href={GITHUB_URL} className="text-[17px] text-ink underline-offset-4 hover:underline">
                View on GitHub
              </a>
            </div>
            <p className="mt-4 text-[14px] text-steel">Requires macOS 14 or later.</p>

            <Image
              src="/shots/theme-aurora.jpg"
              alt="Ovra's start page with the tab sidebar"
              width={2000}
              height={1143}
              priority
              sizes="(max-width: 1024px) 94vw, 980px"
              className="land mx-auto mt-14 h-auto w-full max-w-[980px] sm:mt-20"
            />
          </div>
        </section>

        {/* Protection */}
        <section id="protection" className="mt-24 scroll-mt-12 bg-black py-24 text-center text-white sm:py-32">
          <div className="mx-auto max-w-[1024px] px-5">
            <h2 className="fade-up mx-auto max-w-[16ch] text-balance text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
              Blocks the junk before it loads.
            </h2>
            <p className="fade-up mx-auto mt-6 max-w-[52ch] text-balance text-[19px] text-white/65">
              Ads and trackers are stopped by default, using DuckDuckGo&apos;s Tracker Radar, including known
              fingerprinting scripts. You&apos;re harder to follow from site to site, and pages load faster because
              there&apos;s less to load.
            </p>
            <div className="mx-auto mt-14 grid max-w-[760px] gap-4 text-start sm:grid-cols-3">
              {[
                ["Ad blocking", "On from the first launch. Switch it off anytime in Settings."],
                ["Tracker blocking", "Known trackers are blocked across every site you visit."],
                ["Fingerprinting scripts", "Known fingerprinting scripts are blocked along with trackers."],
              ].map(([title, text]) => (
                <div key={title} className="fade-up rounded-[22px] bg-white/[0.08] p-6">
                  <h3 className="text-[19px] font-semibold">{title}</h3>
                  <p className="mt-2 text-[15px] text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Themes */}
        <section id="themes" className="scroll-mt-12 bg-cloud py-24 text-center sm:py-32">
          <div className="mx-auto max-w-[1024px] px-5">
            <h2 className="fade-up text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.015em]">Make it yours.</h2>
            <p className="fade-up mx-auto mt-5 max-w-[44ch] text-balance text-[19px] text-steel">
              Pick a theme and the whole window follows, from the sidebar to the start page. Or build your own with up
              to four colors, and share it with friends as a file.
            </p>
            <div className="mt-12">
              <ThemeSwitcher />
            </div>
          </div>
        </section>

        {/* Sync */}
        <section id="sync" className="scroll-mt-12 overflow-hidden py-24 text-center sm:py-32">
          <div className="mx-auto max-w-[1024px] px-5">
            <p className="fade-up inline-block rounded-full bg-cloud px-3 py-1 text-[13px] font-medium text-graphite">Coming soon</p>
            <h2 className="fade-up mx-auto mt-5 max-w-[16ch] text-balance text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
              One account. Every device.
            </h2>
            <p className="fade-up mx-auto mt-5 max-w-[48ch] text-balance text-[19px] text-steel">
              Sign in with your Ovra account on your Mac, iPhone and iPad. Open tabs, bookmarks, history and settings
              stay in sync, so you can pick up where you left off.
            </p>
            <div className="rise mt-16">
              <Devices />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-12 bg-cloud py-24 sm:py-32">
          <div className="mx-auto max-w-[1024px] px-5">
            <h2 className="fade-up text-center text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
              Everything you need.
            </h2>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="fade-up rounded-[22px] bg-white p-7">
                  <h3 className="text-[21px] font-semibold leading-tight">{feature.title}</h3>
                  <p className="mt-2 text-graphite">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="py-24 text-center sm:py-32">
          <div className="mx-auto max-w-[1024px] px-5">
            <Image src="/ovra-icon.png" alt="" width={96} height={96} className="fade-up mx-auto" />
            <h2 className="fade-up mt-6 text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.015em]">Try Ovra.</h2>
            <p className="fade-up mx-auto mt-4 max-w-[40ch] text-[19px] text-steel">Available for the Mac. It takes a minute to set up.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a href={DOWNLOAD_URL} className="pill">
                Download for Mac
              </a>
              <a href={ISSUES_URL} className="text-[17px] underline-offset-4 hover:underline">
                Report a bug or share an idea
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-cloud text-[12px] text-steel">
        <div className="mx-auto flex max-w-[1024px] flex-col gap-3 border-t border-hairline px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Ovra. Made by{" "}
            <a href="https://kilianbalaguer.me" className="text-graphite hover:underline">
              Kilian Balaguer
            </a>{" "}
            in Marrakech.
          </p>
          <div className="flex gap-5 text-graphite">
            <a href={GITHUB_URL} className="hover:underline">
              GitHub
            </a>
            <a href={ISSUES_URL} className="hover:underline">
              Feedback
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
