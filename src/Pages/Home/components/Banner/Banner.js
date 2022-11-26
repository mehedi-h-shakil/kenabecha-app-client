import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-lime-100">
        <div className="container flex flex-col gap-6 justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center w-full lg:w-1/2 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <div className="carousel w-full">
              <div
                id="slide1"
                className="carousel-item relative lg:w-full lg:h-96"
              >
                <img
                  src="https://i.ibb.co/wpBzVrc/iphone-13-model-unselect-gallery-1-202207-removebg-preview.png"
                  className="w-full"
                  alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/wpBzVrc/iphone-13-model-unselect-gallery-1-202207-removebg-preview.png"
                  className="w-full"
                  alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/wpBzVrc/iphone-13-model-unselect-gallery-1-202207-removebg-preview.png"
                  className="w-full"
                  alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/wpBzVrc/iphone-13-model-unselect-gallery-1-202207-removebg-preview.png"
                  className="w-full"
                  alt=""
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Buy <br />
              Sell <br />
              <span className="text-orange-400">Enjoy</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              What are you waiting for?
              <br className="hidden md:inline" />
              Grab the best price now.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-black dark:bg-violet-400 dark:text-gray-900"
              >
                Get Started
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-black"
              >
                Offers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to 50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">CODE50</span>
            </div>
            <Link
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
