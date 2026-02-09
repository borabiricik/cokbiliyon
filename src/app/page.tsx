import phrases from "../../phrases.json";
import PhraseCarousel from "./PhraseCarousel";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.3),transparent_55%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Çok biliyon kanka
          </h1>
          <div className="relative w-full rounded-[32px] border border-white/15 bg-white/10 px-6 py-10 shadow-[0_25px_80px_-40px_rgba(248,113,113,0.8)] backdrop-blur">
            <PhraseCarousel phrases={phrases} intervalMs={5000} />
          </div>
          <p className="max-w-2xl text-sm text-white/60 sm:text-base">
            Bu sayfa her 5 saniyede bir yeni bir cümleyle seni taçlandırır.
          </p>
        </div>
      </main>
    </div>
  );
}
