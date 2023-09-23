export default function Plus_MinusButton(props) {
  return (
    <>
      <button
        onClick={props.onRemove}
        type="button"
        className="text-blue-800 border-2  border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        -
      </button>

      <button
        onClick={props.onAdd}
        type="button"
        className="text-blue-800 border-2 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        +
      </button>
    </>
  );
}
