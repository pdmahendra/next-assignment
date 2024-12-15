import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative bg-[#E03737] h-full md:h-auto mt-24">
      <div className="max-w-[90%] md:w-[80%] mx-auto font-outfit">
        <div className="md:flex justify-between mx-auto pt-16">
          <h1 className="text-2xl md:text-4xl text-[#FFFFFF] w-full md:w-[40%]">
            SO WHY LATE? ONE STEEP FAR FROM A TOUR
          </h1>

          <div className="md:space-x-4 space-y-4 pt-6">
            <input
              type="text"
              placeholder="Your mail address"
              className="bg-[#FFFFFF] placeholder-[#4E4E4E] text-base py-3 px-4 md:px-10 rounded  w-full md:w-auto"
            />

            <button className="bg-[#FFFFFF] text-[#4E4E4E] text-base py-3 px-10 rounded  w-full md:w-auto">
              {" "}
              Send
            </button>
          </div>
        </div>
        <div className="border-b pt-8 md:pt-12 text-[#FFFFFF] opacity-60"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 pt-12 md:pt-24">
          <div className="md:col-span-2">
            <p className="text-[#FFFFFF] text-2xl font-bold">Logo Here</p>
            <p className="text-[#FFFFFF] text-base md:max-w-[70%] pt-4">
              Immerse yourself in stunning visuals and captivating stories as
              you navigate through our website.{" "}
            </p>
            <div className="flex gap-4 pt-6">
              <img src="./x.png" alt="x" className="h-6 w-6" />
              <img src="./fb.png" alt="facebook" className="h-6 w-6" />
              <img src="./insta.png" alt="instagram" className="h-6 w-6" />
              <img src="./github.png" alt="github" className="h-6 w-6" />
            </div>
          </div>

          <div className="col-span-1 flex flex-col space-y-3 max-md:pt-8">
            <Link href={"#"} className="text-[#FFFFFF] text-lg font-medium">
              About us
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Home
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              About us
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Destination
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Contact us
            </Link>
          </div>

          <div className="col-span-1 flex flex-col space-y-3 max-md:pt-8">
            <Link href={"#"} className="text-[#FFFFFF] text-lg font-medium">
              Services
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Support
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Explore
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Get in Touch
            </Link>
            <Link href={"#"} className="text-[#FFFFFF] text-base">
              Testimonials
            </Link>
          </div>

          <div className="col-span-1 flex flex-col space-y-4 max-md:pt-8">
            <Link href={"#"} className="text-[#FFFFFF] text-lg font-medium">
              Contact Info
            </Link>
            <p className="text-[#FFFFFF] text-base">
              20, Guze Ellul Mercer Str, Iklin IKL1371 MALTA
            </p>
            <div className="flex gap-4 items-center">
              <img src="./call.png" alt="" className="h-6 w-6" />
              <p className="text-[#FFFFFF] text-base">123-456-789</p>
            </div>
            <div className="flex gap-4 items-center">
              <img src="./email.png" alt="" className="h-6 w-6" />
              <p className="text-[#FFFFFF] text-base">maltaxplore@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-b pt-6 text-[#FFFFFF] opacity-20"></div>

        <p className="text-[#FFFFFF] opacity-50 text-sm text-center py-6 pb-[50px]">
          © maltaxplore 2024 , All Rights Reserved
        </p>
        <div className="max-md:hidden absolute bg-white rounded-b-2xl w-[16px] h-[100px] xl:h-[130px] top-0 left-[48%] xl:left-[49%] -translate-y-1">
          {" "}
        </div>

        <div className="max-md:hidden absolute bg-white rounded-b-2xl w-[16px] h-[20px] top-0 right-[47%] xl:right-[48%] -translate-y-1">
        </div>

        <div className="max-md:hidden absolute bg-white rounded-2xl w-[16px] h-[70px] xl:h-[101px] top-6 right-[47%] xl:right-[48%] ">
        </div>


      </div>
    </div>
  );
};

export default Footer;
