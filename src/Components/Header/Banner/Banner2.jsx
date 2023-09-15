import { Banner } from "flowbite-react";
import { HiX } from "react-icons/hi";
import Clock from "../../../../src/assets/icons8-hourglass.gif";
import CountDown from "../../CountDown/CountDown";


export default function DefaultStickyBanner() {
  return (
    <Banner>
      <div className="relative top-0 left-0 z-20 flex justify-between w-full p-2 md:p-1 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <img src={Clock} alt="Clock" /> {/* Use the img tag for images */}
            <span className="md:text-2xl">
              Hurry Up Free Delivery
              
            </span>
            <CountDown />
          </p>
        </div>
        <Banner.CollapseButton
          color="gray"
          className="border-0 bg-transparent px-0"
        >
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
  );
}
