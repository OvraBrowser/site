import Image from "next/image";
import { DOWNLOAD_URL } from "@/lib/links";

const links = [
  { href: "#protection", label: "Protection" },
  { href: "#themes", label: "Themes" },
  { href: "#sync", label: "Sync" },
  { href: "#features", label: "Features" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[rgba(255,255,255,0.8)] backdrop-blur-xl backdrop-saturate-[1.8]">
      <nav aria-label="Main" className="mx-auto flex h-12 max-w-[1024px] items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold">
          <Image src="/ovra-mark.png" alt="" width={18} height={18} />
          Ovra
        </a>
        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[13px] text-ink/75 transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={DOWNLOAD_URL} className="pill !px-4 !py-1.5 !text-[13px]">
          Download
        </a>
      </nav>
    </header>
  );
}
