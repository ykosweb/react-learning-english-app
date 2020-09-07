import React from "react";
import classes from "./Preloader.module.sass";
import preloader from "./../../../assets/images/ball-triangle.svg"

const Preloader = props => {
    return (
        <div className={classes.preloaderBlock}>
            <img className={classes.preloader}
                 src={preloader}
                 alt="Preloader"
            />
        </div>
    )
};

export default Preloader;