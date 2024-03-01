import { shaderMaterial, useTexture, useGLTF } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { Color } from "three";
import { useRef } from "react";
import portalVertexShader from "@/shaders/portal/vertex.glsl";
import portalFragmentShader from "@/shaders/portal/fragment.glsl";
import { DoubleSide } from "three";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new Color("#ffffff"),
    uColorEnd: new Color("#000000"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

export default function Model() {
  const { nodes } = useGLTF("./model/portal.glb");

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} side={DoubleSide} />
      </mesh>

      <mesh
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      >
        <meshBasicMaterial color="#ffffe5" />
      </mesh>

      <mesh
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
      >
        <meshBasicMaterial color="#ffffe5" />
      </mesh>

      <mesh
        geometry={nodes.portalLight.geometry}
        position={nodes.portalLight.position}
        rotation={nodes.portalLight.rotation}
      >
        <portalMaterial ref={portalMaterial} />
      </mesh>
    </>
  );
}
