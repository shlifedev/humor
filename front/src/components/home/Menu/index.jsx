import React from "react";
import scss from "./index.module.scss";
import { MenuItem } from "./../MenuItem/index";


export default function Menu({ items, title, content }) {
  return (
    <ul className={scss.list}>
      {title ? <li className={scss.title}>{title}</li> : null}
      {items.map((v) => {
        return (
          <MenuItem
            key={v.id}
            href={v.href}
            iconSrc={v.icon}
            text={v.text}
          ></MenuItem>
        );
      })} 
    </ul>
  );
}
