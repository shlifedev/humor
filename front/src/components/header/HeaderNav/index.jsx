import Menu from "../../home/Menu";
import scss from "./index.module.scss";
import { useSelector } from "react-redux";
export const HeaderNav = () => {
  const active = useSelector((state) => !state.menu.active);
 
  return (
    <>
      {active ? (
        <div className={scss.container}>
          <div className={scss.h2}>Commnunity</div>
          <nav className={scss.nav}>
            <Menu></Menu>
            <Menu></Menu>
          </nav>
        </div>
      ) : null}
    </>
  );
};
