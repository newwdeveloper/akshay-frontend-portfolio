const AboutMeText = () => {
  return (
    <div className="flex flex-col w-5/12 md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Abdelrahman, a web developer instructor with a passion for teaching
        and coding. I specialize in React and front-end development, helping
        students build real-world projects and master modern web technologies. I
        also run a YouTube channel, CodeNest, where I create tutorials and
        courses to guide aspiring developers in their journey toward successful
        careers in tech. Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals.
      </p>
      <button className="border text-white border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange hover:text-black hover:font-extrabold transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
