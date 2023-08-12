"use client";
import { russoOne } from "../fonts";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import useRain from "../hooks/useRain";

const Hero = () => {
  const handleScroll = () => {
    document.documentElement.style.setProperty(
      "--scrollTop",
      `${window.scrollY}px`
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const rainFunction = useRain();
    rainFunction();
  }, []);

  return (
    <section className="hero overflow-hidden border-b-unter/40 border-b-8">
      <div className="hero__layers relative mx-auto w-[100vw] h-[100vh] 2xl:max-w-[1600px] overflow-hidden">
        <div className="hero__heading absolute z-10 inset-0 fx-center sm:justify-start sm:pl-[2rem] md:pl-[4rem] lg:pl-[6rem] xl:pl-[8rem] 2xl:pl-[10rem]">
          <h1
            className={`tracking-wide uppercase ${russoOne.className} text-unter txt-shadow-2`}
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            Бухта<span className="block">Скйольда</span>
          </h1>
        </div>

        <div className="hero__layer hero__layer--0" />
        <div className="hero__layer hero__layer--1" />
        <div className="hero__layer hero__layer--2" />
        <div className="hero__layer hero__layer--3" />
        <div className="hero__layer hero__layer--4" />
        <div className="hero__layer hero__layer--5" />
        <div className="hero__layer ">
          <canvas className="rain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
