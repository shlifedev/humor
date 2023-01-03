import scss from "./index.module.scss";
import { Hamburger } from './Hamburger/index';
export function Header({onMenuToggle}) {
  return (
    <header className={scss.header}>
      <div className={scss.wrap}>
        <div className={scss.left}>
          <Hamburger onMenuToggle={onMenuToggle}></Hamburger>
          <a href="#" className={scss.logo}>Dev</a>

          <div className={scss.searchWrap}>
            <form action="GET">
              <input type="text"></input>
              <button>
                <span className="material-symbols-rounded">search</span>
              </button>
            </form>
          </div>

        </div>

        <div className={scss.right}>
          <div className={scss.rightWrap}>
            <a href="#" className={scss.createPost}>
              Create Post
            </a>
            <div className={scss.notification}>
              <button>
                <span class="material-symbols-rounded">notifications</span>
              </button>
            </div>

            <div className={scss.thumbnail}>
              <button>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--6NBqUfiO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yzaf91bmpjxxtxp0ssz3.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
