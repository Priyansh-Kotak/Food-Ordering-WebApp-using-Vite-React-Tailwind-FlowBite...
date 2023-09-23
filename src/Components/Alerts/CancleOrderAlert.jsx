"use client";
import { useEffect } from "react";
import Done from "../../../src/assets/icons8-ok.gif";
import { Alert } from "flowbite-react";

export default function AllOptions(props) {
  // console.log(
  //   "I am pushing false oudside set timer " + props.cancleAlert.push(false)
  // );
  // setTimeout(() => {
  //   // if (props.cancleAlert.length < 1) {
  //   //   console.log(
  //   //     "I am pushing false inside set timer"
  //   //     // props.onClose()
  //   //   );
  //   //   props.cancleAlert.push(false);
  //   // }
  // }, 2000);
  // useEffect(() => {
  //   // alert("Hello");
  //
  // },[props.cancleAlert])

  props.cancleAlert.push(false);

  return (
    <Alert
      className="fixed left- w-full z-50 align-middle items-center"
      // additionalContent={<ExampleAdditionalContent />}
      color="failure"
      // icon={HiInformationCircle}
      // onDismiss={() => {
      //   return setTimeout(() => {
      //     console.log("inside dismiss");
      //     if (props.cancleAlert.length < 1) {
      //       console.log("I am pushing false inside set timer");
      //       props.onClose();
      //       props.cancleAlert.push(false);
      //     }
      //   }, 3000);
      // }}
      // onDismiss={setTimeout(() => {
      //   if (props.cancleAlert.length < 1) {
      //     console.log("I am pushing false inside set timer");
      //     props.onClose();

      //     console.log("inside dismiss");
      //   }
      // }, 100)}

      // rounded
    >
      <div>
        <div className="flex items-center">
          <img src={Done} alt="Loading Done " />
          <h1 className="md:text-2xl text-xl font-bold ml-4  ">
            Canceled order Successfully
          </h1>
          <span className=" ml-2 text-xl">
            {" "}
            <i>
              now you can <i className="font-bold">Add+</i> the items
            </i>{" "}
          </span>
        </div>
      </div>
    </Alert>
  );
}
