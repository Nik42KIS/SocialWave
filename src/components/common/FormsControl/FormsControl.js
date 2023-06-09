import React from "react";
import styles from "./FormsControl.module.css"


export const Textarea = ({input,meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
   <div className={styles.formControl + " " + styles.error }>
       <div>
         <textarea {...input} {...props}></textarea >
       </div>
       { hasError && <span> { meta.error } </span> }
    </div>)
}

