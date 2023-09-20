"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import ExampleAdditionalContent from "./ExampleAdditionalContent";

export default function AllOptions() {
  return (
    <Alert
      additionalContent={<ExampleAdditionalContent />}
      color="success"
      icon={HiInformationCircle}
      // onDismiss={() => alert("Placed Order Successfully 🥳")}
      rounded
    >
      <span>
        <p>
          <span className="font-medium">Info alert!</span>
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
  );
}
