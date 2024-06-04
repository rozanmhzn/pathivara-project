import React from 'react'

const ContactUS = () => {
  return (
    <>
      <div className="flex lg:justify-around lg:mx-20 lg:my-20 md:mt-20 lg:flex-row md:flex-row flex-col lg:items-center md:items-center p-5">
        <section className="lg:w-2/5 md:h-3/5 w-full">
          <div className="flex flex-col">
            <span className="text-3xl text-HeadingColor font-bold">
              IF YOU HAVE QUESTIONS PLEASE CONTACT US
            </span>
            <span className="text-xl text-textColor font-medium mt-5">
              Fill fields and find approximate your repair
            </span>
          </div>
          <div className="mt-5">
            <form action="">
              <div className="flex gap-5">
                <input
                  placeholder="Type your name"
                  className="p-2 bg-black text-textColor"
                  type="text"
                />
                <input
                  placeholder="Type your email"
                  className="p-2 bg-black text-textColor"
                  type="email"
                />
              </div>
              <div className="mt-5">
                <textarea
                  placeholder="Type your message"
                  className="p-2 bg-black text-textColor w-4/5 resize-none"
                />
              </div>
              <div className="w-32 mt-5">
                <button className="w-full p-2 border-solid border-2">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-10">
            <span className="text-2xl font-semibold">Head Office:</span>
            <span className="text-textColor text-lg text-medium mt-1">
              Battisputali, <br /> Kathmandu, Nepal
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-2xl font-semibold mt-2">Contact:</span>
            <span className="text-textColor text-lg text-medium mt-1">
              +977-9801491740
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold mt-2">Write Us:</span>
            <span className="text-textColor text-lg text-medium mt-1">
              info@pathivarainovations.com
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUS