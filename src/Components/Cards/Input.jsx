const Input=(props)=>{
    return(
        <section className="md:p-1 ">
            <label className="m-1" htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </section>
    )

};

export default Input;