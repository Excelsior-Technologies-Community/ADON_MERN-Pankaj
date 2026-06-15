function PortfolioHero() {
  return (
    <section className="bg-black text-white py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-gray-400 uppercase tracking-[4px] text-sm">
          Portfolio
        </p>

        <h1 className="mt-6 text-6xl md:text-8xl lg:text-[140px] leading-[0.9] font-medium">
          Creative Works &
          <br />
          Digital Experiences
        </h1>

        <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">
          <p className="text-gray-400 text-lg max-w-xl">
            Explore our latest projects, creative solutions, branding concepts
            and digital experiences built for modern businesses.
          </p>

          <p className="text-gray-500">Home / Portfolio</p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHero;
