import React from "react";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";

const downloadApplication = () => {
  const link = document.createElement("a");
  link.href = "/newapp.msi";
  link.download = "Desktop.msi";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const IntroPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
        Main Hero Message to sell your app
      </h1>
      <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
        Sub-hero message, not too long and not too short. Make it just right!
      </p>

      <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
        Download our app:
      </p>
      <div className="flex w-full  justify-center md:justify-start pb-24 lg:pb-0 fade-in ">
        <AnimatedSubscribeButton
          buttonColor="#000000"
          buttonTextColor="#ffffff"
          subscribeStatus={false}
          initialText={
            <span
              className="group inline-flex items-center"
              onClick={downloadApplication}
            >
              Desktop Version
              {/* <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              {/* <CheckIcon className="mr-2 size-4" /> */}
              Downloading
            </span>
          }
        />
      </div>
    </div>
  );
};

export default IntroPage;
