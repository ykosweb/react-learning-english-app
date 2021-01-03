import React, {useState} from "react";
import classes from './Aside.module.sass';
import { faUserAlt, faPoll, faUsers, faInfo } from '@fortawesome/free-solid-svg-icons'
import AsideLink from "./AsideLink/AsideLink";
const Aside = props => {

    const [links, setLinks] = useState([
        {
            text: 'Профиль',
            to: 'profile',
            icon: faUserAlt
        },
        {
            text: 'Друзья',
            to: 'friends',
            icon: faUsers
        },
        {
            text: 'Результаты',
            to: 'results',
            icon: faPoll
        },
        {
            text: 'О приложении',
            to: 'about',
            icon: faInfo
        }
    ])

  return (
    <aside className={classes.aside}>
      <ul>
          {links.map((item, index) => {
              return (
                  <AsideLink
                    key={item.to + index}
                    to={item.to}
                    icon={item.icon}
                    text={item.text}
                  />
              )
          })}
      </ul>
    </aside>
  )
};

export default Aside;