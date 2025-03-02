import React from "react";

// components

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gradient-black-white">
      <div className="w-11/12 mx-auto">
        <h1 className="block text-4xl font-bold mb-2">
          Webサイト制作や改善を
          <br />
          高い技術力でお客様と共に実現する
        </h1>
        <p className="text-lg font-bold text-[var(--blue-primary)]">
          自社の課題や予算などのご用件に沿ったWeb制作を実現します。
        </p>
      </div>
    </div>
  );
};

export default Hero;
