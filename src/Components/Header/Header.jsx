// import './index.css';
import imageheader from "../../assets/Boys-Hostel-Mess.jpg"
import HeaderButton from "../Header/HeaderButton";
const Header = () => {
  return (
    <>
      <div className=  'bg-red-700 h-20 md:h-20 flex items-center sticky top-0'>
        <h1 className= 'text-3xl md:ml-20 ml-5 md:text-5xl text-white displa font-bold' >VIT MESS  </h1>
          <HeaderButton />
      </div>
      
      <div className=" relative z-[-1]">
        <img src={imageheader} className=" md:max-h-96 border-violet-400 rounded-1xl  w-full  scale-x-11 scale-y-125 -translate-y-14 -skew-y-6" />
      </div>

    </>
  );
};


export default Header;
