import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  RoundedBox,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { WA_NUMBER } from "../utils/constants";

function ModernSofa({
  fabricColor,
  legMaterial,
}: {
  fabricColor: string;
  legMaterial: string;
}) {
  const legColor =
    legMaterial === "kayu"
      ? "#5C3A21"
      : legMaterial === "besi"
        ? "#222222"
        : "#D4AF37";

  return (
    <group position={[0, -0.6, 0]}>
      {/* Dudukan */}
      <RoundedBox
        args={[3, 0.4, 1.2]}
        position={[0, 0.5, 0]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color={fabricColor} roughness={0.7} />
      </RoundedBox>

      {/* Sandaran */}
      <RoundedBox
        args={[3, 0.8, 0.4]}
        position={[0, 1.1, -0.4]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color={fabricColor} roughness={0.7} />
      </RoundedBox>

      {/* Sandaran Tangan Kiri */}
      <RoundedBox
        args={[0.3, 0.6, 1.2]}
        position={[-1.65, 0.8, 0]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color={fabricColor} roughness={0.7} />
      </RoundedBox>

      {/* Sandaran Tangan Kanan */}
      <RoundedBox
        args={[0.3, 0.6, 1.2]}
        position={[1.65, 0.8, 0]}
        radius={0.05}
        smoothness={4}
      >
        <meshStandardMaterial color={fabricColor} roughness={0.7} />
      </RoundedBox>

      {/* Kaki Kiri Depan */}
      <mesh position={[-1.4, 0.15, 0.4]}>
        <cylinderGeometry args={[0.04, 0.02, 0.3]} />
        <meshStandardMaterial
          color={legColor}
          metalness={legMaterial !== "kayu" ? 0.8 : 0.1}
          roughness={0.2}
        />
      </mesh>

      {/* Kaki Kanan Depan */}
      <mesh position={[1.4, 0.15, 0.4]}>
        <cylinderGeometry args={[0.04, 0.02, 0.3]} />
        <meshStandardMaterial
          color={legColor}
          metalness={legMaterial !== "kayu" ? 0.8 : 0.1}
          roughness={0.2}
        />
      </mesh>

      {/* Kaki Kiri Belakang */}
      <mesh position={[-1.4, 0.15, -0.4]}>
        <cylinderGeometry args={[0.04, 0.02, 0.3]} />
        <meshStandardMaterial
          color={legColor}
          metalness={legMaterial !== "kayu" ? 0.8 : 0.1}
          roughness={0.2}
        />
      </mesh>

      {/* Kaki Kanan Belakang */}
      <mesh position={[1.4, 0.15, -0.4]}>
        <cylinderGeometry args={[0.04, 0.02, 0.3]} />
        <meshStandardMaterial
          color={legColor}
          metalness={legMaterial !== "kayu" ? 0.8 : 0.1}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function SofaConfigurator3D() {
  const [fabricColor, setFabricColor] = useState("#F5F5DC");
  const [legMaterial, setLegMaterial] = useState("kayu");

  const colors = [
    { name: "Krem", hex: "#F5F5DC" },
    { name: "Abu-abu", hex: "#808080" },
    { name: "Navy", hex: "#1C2841" },
    { name: "Emerald", hex: "#2E8B57" },
  ];

  const legs = [
    { name: "Kayu Solid", value: "kayu" },
    { name: "Besi Hitam", value: "besi" },
    { name: "Stainless Gold", value: "gold" },
  ];

  const handleOrder = () => {
    const text = `Halo, saya tertarik dengan desain sofa custom. Warna: ${fabricColor}, Material Kaki: ${legMaterial}.`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 bg-white p-6 md:p-10 rounded-3xl shadow-2xl">
      <div className="w-full lg:w-2/3 h-[400px] md:h-[550px] bg-gradient-to-b from-gray-50 to-gray-200 rounded-2xl relative overflow-hidden cursor-move">
        <Canvas camera={{ position: [0, 2.5, 6], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          <ModernSofa fabricColor={fabricColor} legMaterial={legMaterial} />

          <ContactShadows
            position={[0, -0.6, 0]}
            opacity={0.6}
            scale={10}
            blur={2}
            far={4}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2 + 0.1}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8 justify-center">
        <div>
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
            Warna Kain
          </h3>
          <div className="flex gap-4">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setFabricColor(c.hex)}
                className={`w-14 h-14 rounded-full border-4 transition-all duration-300 ease-in-out ${fabricColor === c.hex ? "border-accent scale-110 shadow-lg" : "border-transparent shadow-sm"}`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
            Material Kaki
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {legs.map((l) => (
              <button
                key={l.value}
                onClick={() => setLegMaterial(l.value)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium text-lg ${legMaterial === l.value ? "bg-primary text-white shadow-md" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleOrder}
            className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-accent to-primary text-white shadow-md hover:brightness-95 transition-all"
          >
            Pesan Desain Ini
          </button>
        </div>
      </div>
    </div>
  );
}
