export default function CartItems(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="md:flex md:justify-between md:my-5 md:border-b-4 border-red-300 border-b-2 my-5 py-2   flex justify-between  md:border-red-300 md:pb-4">
      <div>
        <h2 className="md:text-2xl md:pb-2 md:font-bold text-xl font-bold pb-2 ">{props.name}</h2>
        <div className="md:flex flex">
          <span className="md:font-bold font-bold  md:text-orange-600 text-orange-600 md:text-xl text-lg mr-7  md:mr-7">
            {price}
          </span>
          <span className="md:border-2 p-1">X {props.amount}</span>
        </div>
      </div>

      <div >
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
      </div>
    </li>
  );
}
