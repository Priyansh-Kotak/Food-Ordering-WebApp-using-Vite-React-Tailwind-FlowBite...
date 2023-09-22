import { Fragment } from "react";
import ReactDOM from "react-dom";
import Alert from "../Alerts/Alert";
const BackDrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="  opacity-80 bg-gray-700 w-full h-[100%]  max-h-max top-0 right-0 fixed z-20 "
    ></div>
  );
};

const ModelOverlay = (props) => {
  return (
    <div className="border-2 fixed md: bg-white first-letter:white md:top-[20%] md:max-h-[60%] md:overflow-scroll max-h-[60%] overflow-scroll top-[30%] w-[90%] left-[5%] rounded-2xl p-6 shadow-2xl z-30 md:w-1/3 md:left-1/3">
      <div>{props.children}</div>
    </div>
  );
};

const AlertOverlay = (props) => {
  return (
    <div className=" fixed md: first-letter:white md:top-[30%] md:max-h-[60%]  top-[40%] w-[90%] left-[5%] rounded-2xl p-3 shadow-2xl z-30 md:w-1/3 md:left-1/3">
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {props.onhideCart &&
        ReactDOM.createPortal(
          <ModelOverlay>{props.children}</ModelOverlay>,
          portalElement
        )}

      {props.onshowAlert &&
        ReactDOM.createPortal(
          <AlertOverlay>
            <Alert onClose={props.onClose} />
          </AlertOverlay>,
          portalElement
        )}
    </Fragment>
  );
};

export default Model;
