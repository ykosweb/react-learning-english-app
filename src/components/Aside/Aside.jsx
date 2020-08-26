import React from "react";
import classes from './Aside.module.sass';

const Aside = props => {
  return (
    <aside className={classes.aside}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </aside>
  )
};

export default Aside;