import Input from "../../Cards/Input";

const MealForm = () => {
  return (
    <form className="my-1 p-1 border-2 border-black">
      <Input
        label="Amout"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        type="button"
        className="text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-1 mb-1"
      >
        + Add
      </button>
    </form>
  );
};

export default MealForm;
