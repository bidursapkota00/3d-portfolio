import {
  shaderMaterial,
  Sparkles,
  Center,
  useTexture,
  useGLTF,
  OrbitControls,
  useMatcapTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import portalVertexShader from "@/shaders/portal/vertex.glsl";
import portalFragmentShader from "@/shaders/portal/fragment.glsl";
import Text from "./text";

const material = new THREE.MeshMatcapMaterial();

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

export default function HomePage() {
  const { nodes } = useGLTF("./model/portal.glb");
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <>
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
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

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />

        <Text
          material={material}
          position={[0, 2.0, -1.7]}
          size={0.19}
          height={0.05}
        >
          Bidur Sapkota
        </Text>

        <Text material={material} position={[0, 0.09, -0.8]}>
          Web Developer
        </Text>

        <Text material={material} position={[0, 0.35, -1.65]}>
          Contact Me
        </Text>

        <Text
          height={0}
          size={0.06}
          material={material}
          position={[0, 0.23, -1.45]}
        >
          bidursapkota00@gmail.com
        </Text>

        <Text
          height={0}
          size={0.06}
          material={material}
          position={[0, 0.13, -1.2]}
        >
          +977 9865711881
        </Text>
      </Center>
    </>
  );
}
