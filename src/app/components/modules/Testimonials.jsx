"use client";
import Image from "next/image";
import Link from "next/link";
import user from "../../assets/user.jpg";
import { productionData } from "@/app/constant/productionData";
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from "react-icons/io";
import ProductionCard from "../ProductionCard";
import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import HoriztionalScroll from "../../components/horiztionalScroll";
import BackgroundText from "../BackgroundText";

const Main = styled.main``;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;
const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Testimonials = () => {
  return (
    <div className="mt-10">
      <section className="flex justify-center">
        <Link href={`https://www.youtube.com/watch?v=8p7t8L-WDd0`}>
          <span className="bg-white p-5 rounded-full text-black">PLAY</span>
        </Link>
      </section>
      <BackgroundText text="TESTIMONIALS" />
      <section className=" mx-5 bg-bgColor p-7">
        <div className="flex flex-col gap-5 items-center">
          <span className="text-lg font-semibold">
            Best IT Company in Nepal
          </span>
          <span className="text-textColor text-xl w-3/4">
            I have been using LMS for my engineering college which was developed
            by Pathivara Innovations. Very happy with their product and support.
          </span>
          <section className="mt-5 flex justify-center items-center gap-3">
            <Image className="rounded-full" width={50} height={50} src={user} />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Rameshowr Rijal</span>
              <span className="text-textColor">Principal, KEC</span>
            </div>
          </section>
        </div>
      </section>
      <section>
        <div className="flex justify-between mt-5 mx-10 p-5">
          <button>
            <IoMdArrowDropleftCircle size={20} />
          </button>
          <button>
            <IoMdArrowDroprightCircle size={20} />
          </button>
        </div>
        <div className="grid justify-items-center">
          <span className="text-sm font-semibold">WHAT PEOPLE ARE SAYING</span>
          <span className="text-sm text-textColor font-semibold">
            TESTIMONIALS
          </span>
        </div>
      </section>
      {/* <HorizontalSection>
        <HoriztionalScroll>
          <CardsContainer>
            <section className="flex mt-10 mx-5 gap-10 w-full overflow-y-hidden relative h-[90vh] ">
              <div className="text-HeadingColor w-3/5 text-[10rem]">
                <span>WHAT WE CAN DO</span>
              </div>

              <div className=" flex flex-row gap-16 h-[100vh]">
                {productionData.slice(0, 6).map((data, index) => {
                  return <ProductionCard key={index} cardData={data} />;
                })}
              </div>
              <div className="text-HeadingColor w-3/5 text-[10rem]">ALL IT SOLUTIONS HERE</div>
            </section>
          </CardsContainer>
        </HoriztionalScroll>
      </HorizontalSection> */}
      <HorizontalSection>
        <HoriztionalScroll>
          <CardsContainer>
            <section className="flex mt-10 mx-5 gap-10 w-full overflow-y-hidden relative h-[70vh] md:h-[80vh] lg:h-[90vh] ">
              <div className="text-HeadingColor w-3/5 text-[7rem] ">
                <span>WHAT WE CAN DO</span>
              </div>

              <div className=" flex flex-row gap-16 h-[100vh]">
                {productionData.slice(0, 6).map((data, index) => {
                  return <ProductionCard key={index} cardData={data} />;
                })}
              </div>
              <div className="text-HeadingColor w-3/5 text-[7rem]">
                ALL IT SOLUTIONS HERE
              </div>
            </section>
          </CardsContainer>
        </HoriztionalScroll>
      </HorizontalSection>
    </div>
  );
};

export default Testimonials;
