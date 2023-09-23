import Banner2 from "./Banner/Banner2";
import HeaderButton from "../Header/HeaderButton";
import MealsSummary from "../Meals/MealsSummary";
import CancleOrderAlert from "../Alerts/CancleOrderAlert";
const Header = (props) => {
  console.log();
  return (
    <>
      <div className="bg-red-700 h-20 md:h-20 flex items-center sticky z-50 top-0">
        <h1 className="text-4xl md:ml-20 ml-5 md:text-7xl text-white displa font-['Kablammo']">
          Apna Khana
        </h1>
        <HeaderButton onclick={props.onshowCart} />
      </div>
      {console.log("Cancle Alet Function " + props.cancleAlertfunction())}
      {props.cancleAlertfunction() && (
        <div>
          <CancleOrderAlert
            onClose={props.onhideCart}
            cancleAlert={props.cancleAlert}
            cancleAlertfunction={props.cancleAlertfunction}
          />
        </div>
      )}

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
