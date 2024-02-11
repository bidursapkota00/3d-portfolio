import {
  Sparkles,
  Center,
  OrbitControls,
  useMatcapTexture,
} from "@react-three/drei";
import { MeshMatcapMaterial, sRGBEncoding } from "three";
import { useEffect } from "react";
import Text from "./text";
import Model from "./model";

const material = new MeshMatcapMaterial();

export default function HomePage() {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  useEffect(() => {
    matcapTexture.encoding = sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <>
      <OrbitControls makeDefault />
      <Center>
        <Model />
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
