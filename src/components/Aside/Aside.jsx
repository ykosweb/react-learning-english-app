import React from "react";
import classes from './Aside.module.sass';

const Aside = props => {
  return (
    <aside className={classes.aside}>
      <ul>
        <li>nav1</li>
        <li>nav2</li>
        <li>nav3</li>
        <li>nav4</li>
        <li>nav5</li>
      </ul>
    </aside>
  )
};

export default Aside;