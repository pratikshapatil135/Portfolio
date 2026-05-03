const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center  gap-8">

      {/* same title style as Skills */}
      <h2 className="text-3xl font-bold gap-2 text-purple-400">
        Connect With Me
      </h2>

      {/* SAME container style as Skills */}
      <div className="flex flex-wrap justify-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">

        <a
          href="https://www.linkedin.com/in/pratiksha-patil-a6983232b"
          target="_blank"
          className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:scale-105 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/pratikshapatil135"
          target="_blank"
          className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:scale-105 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.codechef.com/users/pratiksha13_5"
          target="_blank"
          className="px-5 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 hover:scale-105 transition"
        >
          CodeChef
        </a>

      </div>
    </div>
  );
};

export default SocialLinks;