import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import HackerRoom from "../components/DeveloperRoom";
import { Suspense } from "react";

function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Yordan <span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={null}></Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HackerRoom />
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;
