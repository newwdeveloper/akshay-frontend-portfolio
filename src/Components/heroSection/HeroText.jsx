const HeroText = () => {
  return (
    <div className="flex flex-col pl-6 gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan ">
        Front-End Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg-text-5xl sm:text-4xl font-bold font-special text-orange">
        Akshay Mangutkar
      </h1>
      <p className="text-lg mt-4 text-white">
        Passionate about crafting interactive and <br />
        responsive web experiences.
        <br />
        Specializing in modern front-end technologies
        <br /> to build sleek and user-friendly applications.
      </p>
    </div>
  );
};

export default HeroText;
