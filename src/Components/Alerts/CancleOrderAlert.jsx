"use client";
import Done from "../../../src/assets/icons8-ok.gif";
import { Alert } from "flowbite-react";

export default function CancleOrderAlert(props) {
  return (
    <Alert
      className="fixed left- w-full z-50"
      // additionalContent={<ExampleAdditionalContent />}
      color="failure"
      // icon={HiInformationCircle}
      onDismiss={setTimeout(() => {
        console.log(
          "I am inside cancel alert dismiss " + props.cancleAlertfunction()
        );
        // props.cancleAlertfunction();
        props.cancleAlert.push(false);
        props.onClose();
      }, 2000)}
      // rounded
    >
      <div>
        <div className="flex items-center">
          <img src={Done} alt="Loading Done " />
          <h1 className="md:text-2xl text-xl font-bold ml-4  ">
            Canceled order Successfully
          </h1>
        </div>
      </div>
    </Alert>
  );
}
