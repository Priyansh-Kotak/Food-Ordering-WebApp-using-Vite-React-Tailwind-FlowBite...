import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = () => {
  return (
    <div className="  opacity-80 bg-gray-700 w-full h-[100%]  max-h-max top-0 right-0 fixed z-20 "></div>
  );
};

const ModelOverlay = (props) => {
  return (
    <div className="border-2 fixed bg-white top-[30%] w-[90%] left-[5%] rounded-2xl p-6 shadow-2xl z-30 md:w-1/3 md:left-1/3">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Model;
