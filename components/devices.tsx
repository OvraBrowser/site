import Image from "next/image";

// Simple device outlines. The Mac shows the real app; iPhone and iPad aren't out yet,
// so they show the Ovra mark instead of a made-up screen.
function Mark({ size }: { size: number }) {
  return <Image src="/ovra-mark.png" alt="" width={size} height={size} className="opacity-90" />;
}

export default function Devices() {
  return (
    <div aria-hidden className="relative mx-auto flex max-w-[860px] items-end justify-center gap-4 sm:gap-8">
      {/* iPad */}
      <div className="hidden w-[22%] sm:block">
        <div className="grid aspect-[3/4] place-items-center rounded-[22px] border-[7px] border-ink bg-cloud">
          <Mark size={40} />
        </div>
      </div>

      {/* Mac */}
      <div className="w-[64%] sm:w-[52%]">
        <div className="overflow-hidden rounded-t-[14px] border-[7px] border-b-0 border-ink bg-ink">
          <Image src="/shots/theme-aurora.jpg" alt="" width={2000} height={1143} className="h-auto w-full" />
        </div>
        <div className="mx-[-6%] h-3 rounded-b-[10px] bg-gradient-to-b from-[#c7c7cc] to-[#a1a1a6]" />
      </div>

      {/* iPhone */}
      <div className="w-[20%] sm:w-[12%]">
        <div className="grid aspect-[9/19] place-items-center rounded-[18px] border-[5px] border-ink bg-cloud">
          <Mark size={24} />
        </div>
      </div>
    </div>
  );
}
