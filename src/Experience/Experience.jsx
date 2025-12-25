/** @format */

import React, { Suspense } from "react";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Experience = () => {
	return (
		<>
			<Canvas camera={{ position: [0, 1, 6.8], fov: 20 }}>
				<OrbitControls
					makeDefault
					enableDamping
					target={[0, 1, 0]}
					minDistance={3}
					maxDistance={7}
					minPolarAngle={THREE.MathUtils.degToRad(40)}
					maxPolarAngle={THREE.MathUtils.degToRad(96)}
					minAzimuthAngle={THREE.MathUtils.degToRad(-22)}
					maxAzimuthAngle={THREE.MathUtils.degToRad(22)}
				/>
				<Scene />
			</Canvas>
		</>
	);
};

export default Experience;
