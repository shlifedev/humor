import scss from "./index.module.scss";
export const Hamburger = ({onMenuToggle}) => {
  return <button onClick={onMenuToggle} className={scss.container}>
    <span className="material-symbols-rounded">
      menu
    </span>
  </button>
}