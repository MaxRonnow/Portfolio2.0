function Aboutme() {
  return (
    <div className="backdrop-blur-sm min-w-full min-h-screen bg-[#8686861d] flex flex-row justify-center items-center">
      <div className="h-auto max-w-[50%] p-9 border-solid border-2 border-neutral-400 bg-[#afafaf2d] font-title font-thin rounded-3xl shadow-md">
        <h1 className=" text-3xl">A passion for software</h1>
        <p className="text-lg p-5">
          My goal with the software that I write is that is solves some kind of
          problem or improves someones life in some way. I aim to create
          performant software that is also beautiful and user friendly.
          Experimentation and learning are the tools I use to create the best
          software possible.
        </p>

        <p className="text-lg p-5">
          I am 21 years old, studying data science at Åbo Akademi University in
          Turku, Finland.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
