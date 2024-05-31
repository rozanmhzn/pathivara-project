import React from "react";

const Card = () => {
  return (
    <div className="lg:w-80 sm:w-full md:w-60 p-5 h-80 md:h-96 grid justify-items-center bg-bgColor rounded-md">
      <section className="text-textColor text-2xl font-bold ">
        <span>SOFTWARE DEVELOPMENT</span>
      </section>
      <section className="text-xl text-textColor">
        <span>
          We code your visions into reality. Our software development team
          crafts digital solutions that turn your ideas into innovation.
        </span>
      </section>
      <section className="cursor-pointer">
        <buton>
          <span>Read More</span>
        </buton>
      </section>
    </div>
  );
};

export default Card;
