import React from 'react';
// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref)=>{
    return(
        <section className="md:p-1 ">
            <label className="m-1" htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </section>
    )

});

export default Input;