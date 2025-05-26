// components/AnimatedLogo.jsx
"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottieAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <Lottie className="mr-40"
      animationData={animationData}
      loop={true}
      style={{ width: 700, height: 500 }}
    />
  );
}
