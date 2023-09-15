// import './index.css';
// import { Banner } from "flowbite-react";
import Banner from "./Banner/Banner";
import Banner2 from "./Banner/Banner2";
import HeaderButton from "../Header/HeaderButton";
import MealsSummary from "../Meals/MealsSummary";
const Header = (props) => {
  return (
    <>
      <div className="bg-red-700 h-20 md:h-20 flex items-center sticky z-50 top-0">
        <h1 className="text-4xl md:ml-20 ml-5 md:text-7xl text-white displa font-['Kablammo']">
          Apna Khana
        </h1>
        <HeaderButton onclick={props.onshowCart} />
      </div>

      {/* <div className=" relative z-[-1]">
        <img
          src={imageheader}
          className=" md:max-h-96 border-violet-400 rounded-1xl  w-full  scale-x-11 scale-y-125 -translate-y-14 -skew-y-6"
        />
      </div> */}

      <div>
        <Banner2 />
      </div>

      <div>
        <MealsSummary />
      </div>
    </>
  );
};

export default Header;
