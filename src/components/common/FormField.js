import React from "react";


export default ({input,label,type,required,meta : {error,touched}}) =>{
   // console.log(meta);
    return(
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} required={required} {...input} className="form-control"  />
            {
                error && touched && 
                ( <div className="text-danger title mt-2">
                {error}
                </div>)
                
            }
           
        </div>
    )
}