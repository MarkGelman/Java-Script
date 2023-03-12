import React from 'react';
import classes from "./UI/button/MyButton.module.css"

function MyButton({children, ...props}) {
    return (
        <button className={classes.myBtn} {...props} >
            {children}
        </button>
    );
}

export default MyButton;
