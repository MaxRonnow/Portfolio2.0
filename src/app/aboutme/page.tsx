function Aboutme() {
  return (
    <div className="backdrop-blur-sm min-w-full min-h-screen  flex flex-col items-center font-title font-thin">
      <div className="max-w-screen-lg mt-20">
        <h1 className=" text-3xl">A passion for software</h1>
        <p className="text-lg p-5">
          My goal with the software that I write is that is solves some kind of
          problem or improves someones life in some way. I aim to create
          performant software that is also beautiful and user friendly.
          Experimentation and learning are the tools I use to create the best
          solutions possible.
        </p>

        <p className="text-lg p-5">
          I am 21 years old, studying data science at Åbo Akademi University in
          Turku, Finland.
        </p>
        <p className="text-lg p-5">
          The front page of this portfolio displays a visualization of how
          electrons orbit a hydrogen atom. The shapes of the orbits depend on
          three so called quantum numbers, n, l and m. You can see these numbers
          displayed in the top right corner on the homepage. The different orbitals represent
          different energy states of the electron. Per quantum mechanics the
          electron doesn't have a specific location in space, rather, the
          density of points represent the probability of finding the elctron
          there. I find nature to be 
        </p>
        <p className="text-lg p-5">
          This page is created in NextJS with React Three Fiber for the 3D
          visuals, Tailwind for styling and Zustand for state management.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
