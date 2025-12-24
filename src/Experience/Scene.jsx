/** @format */

import React, { Suspense } from "react";
import { WallArt } from "./models/Wallart";

const Scene = () => {
	return (
		<>
			<Suspense>
				<WallArt />
			</Suspense>
		</>
	);
};

export default Scene;
