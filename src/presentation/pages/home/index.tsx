export function HomePage() {
  return (
    <main>
      <div className="container text-center p-5 h-screen flex flex-col items-center justify-center gap-3 max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
        <img src="/icon.svg" alt="Atlas" className="md:max-w-xs" />
        <div className="space-y-3 md:max-w-xs lg:max-w-md xl:max-w-xl">
          <h2 className="text-3xl p-1 font-serif font-black text-primary lg:text-4xl xl:text-6xl">
            Mestre das Masmorras
          </h2>
          <p className="px-3 md:p-0">
            Tudo o que você precisa para criar e gerenciar suas aventuras de RPG.
          </p>
        </div>
      </div>
    </main>
  )
}
