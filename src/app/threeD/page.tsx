import ThreeDView from "./components/threeDView";

export default function ThreeD() {
  return (
    <div className="min-h-screen min-w-full backdrop-blur-sm flex flex-col justify-center items-center font-title font-extralight text-white">
      <div className="min-w-10 max-w-[90vw] lg:max-w-[70vw] my-10">
        <h1 className="text-3xl w-4/6">3D</h1>
        <p className="text-lg my-4">
          Besides programming I also do some 3D work. I love to combine the two
          to make even better experiences. Here I have a couple of models
          I&apos;ve worked on.
        </p>
        <div className="min-w-10 max-w-[90vw] lg:max-w-[70vw] flex justify-center">
          <ThreeDView></ThreeDView>
        </div>
      </div>
    </div>
  );
}
