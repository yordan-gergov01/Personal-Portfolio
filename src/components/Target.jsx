import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

function Target(props) {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Target;
