export default function Button(props) {
  const updateOrder = () => {
    console.log("update is clicked ");
    props.checkArray.pop();
    console.log("After clicking the update order" + props.arrayFunction());
    props.cancleAlert.map((event) => {
      console.log("Alert array element before " + event);
    });
    while (props.cancleAlert.length > 0) {
      console.log("We are inside while loop ");
      props.cancleAlert.pop();
    }
    Button(props);
  };
  return (
    <>
      {/* {console.log(
        "Function running after update order is clicked " +
          props.arrayFunction()
      )} */}
      {/* {props.arrayFunction()} */}
      {!props.arrayFunction() ? (
        <button
          onClick={updateOrder}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-1 mb-2 inline-flex items-center dark:bg-blue-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 21"
          >
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          Update Order
        </button>
      ) : (
        props.onshowCart()
      )}
    </>
  );
}
