"use client";
import Done from "../../../src/assets/icons8-ok.gif";
import { Alert } from "flowbite-react";
import ExampleAdditionalContent from "./ExampleAdditionalContent";

export default function AllOptions(props) {
  return (
    <Alert
      // additionalContent={<ExampleAdditionalContent />}
      color="success"
      // icon={HiInformationCircle}
      onDismiss={setTimeout(() => {
        props.onClose();
      }, 4000)}
      // rounded
    >
      <div>
        <div className="flex items-center">
          <img src={Done} alt="Loading Done " />
          <h1 className="md:text-2xl text-xl font-bold ml-4  ">
            Successfully placed order 🥳
          </h1>
        </div>

        <div className="my-3 font-semibold md:text-lg">
          Click on{" "}
          <span className="font-bold mx-2 text-lg">
            <i>Update Order</i>
          </span>{" "}
          to add more items...
        </div>
      </div>
    </Alert>
  );
}
