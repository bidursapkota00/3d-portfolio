"use client";
import { Canvas } from "@react-three/fiber";
import HomePage from "@/components/home";

export default function HomeScreen() {
  return (
    <div id="three">
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [0, 2, 6],
        }}
      >
        <color args={["#030202"]} attach="background" />
        <HomePage />
      </Canvas>
    </div>
  );
}
