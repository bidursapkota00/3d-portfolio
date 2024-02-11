import React from "react";
import { Text3D, Center } from "@react-three/drei";

export default function Text({
  children,
  position = [0, 0.15, 1.2],
  material,
  size = 0.12,
  height = 0.03,
}) {
  return (
    <Center position={position}>
      <Text3D
        material={material}
        font="./fonts/helvetiker_regular.typeface.json"
        size={size}
        height={height}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.005}
        bevelOffset={0}
        bevelSegments={5}
      >
        {children}
      </Text3D>
    </Center>
  );
}
