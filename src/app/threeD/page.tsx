import ThreeDView from "./components/threeDView";

function ThreeD() {
  return (
    <div className="min-h-screen min-w-full backdrop-blur-sm flex flex-col justify-center items-center font-title font-thin">
      <div className="max-w-[90vw] my-10">
        <h1 className="text-3xl w-4/6">3D</h1>
        <p className="text-lg my-4">
          Besides programming I also do some 3D work. I love to combine the two
          to make even better experiences. Here I have a couple of models
          I&aposve worked on.
        </p>
        <div className="">
          <ThreeDView></ThreeDView>
        </div>
      </div>
    </div>
  );
}

export default ThreeD;
