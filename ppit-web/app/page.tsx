import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";
import trondheim from "../public/trondheim.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Background image */}
      <Image
        src={trondheim}
        alt="Trondheim"
        fill
        priority
        className="object-cover"
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Page content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center justify-self-center px-16 py-32">
        <div className="max-w-5xl text-center sm:text-left text-white items-center justify-items-center">
          <h1 className="mb-6 text-3xl text-center font-semibold leading-10 tracking-tight">
            HOME
          </h1>

          <Carousel />

          <p className="mb-10 max-w-md text-lg leading-8 text-zinc-200">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium underline"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium underline"
            >
              Learning
            </a>{" "}
            center.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="flex h-12 w-[158px] items-center justify-center rounded-full bg-white text-black font-medium transition hover:bg-zinc-200"
              href="https://vercel.com/new"
              target="_blank"
            >
              Deploy Now
            </a>

            <a
              className="flex h-12 w-[158px] items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10"
              href="https://nextjs.org/docs"
              target="_blank"
            >
              Documentation
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
