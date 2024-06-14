import React from "react";
import LatestNewsCard from "../LatestNewsCard";
import BackgroundText from "../BackgroundText";

const LatestNews = () => {
  return (
    <div className="mt-5">
      <section>
        <BackgroundText text="LATEST NEWS" />
      </section>
      <section className="flex flex-col flex-wrap gap-5 items-center">
        <span className="text-HeadingColor text-4xl font-semibold">LATEST AND GREATEST POST</span>
        <span className="text-textColor">LATEST THINKING</span>
      </section>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 ml-7">
        <LatestNewsCard />
        <LatestNewsCard />
        <LatestNewsCard />
      </section>
    </div>
  );
};

export default LatestNews;
