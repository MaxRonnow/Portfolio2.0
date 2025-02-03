import ThreeDView from "./components/threeDView";
import Model from "./components/guitar";

function ThreeD() {
  return (
    <div className="min-h-screen min-w-full backdrop-blur-sm flex flex-col justify-center items-center font-title font-thin">
      <h1 className="text-6xl w-4/6">3D</h1>
      <p className="w-4/6 my-6">
        Besides programming I also do some 3D work. I love to combine the two to
        make even better experiences. Here I have a couple of models I've worked
        on.
      </p>
      <div className="">
        <ThreeDView></ThreeDView>
      </div>
    </div>
  );
}

export default ThreeD;
