
import scss from './index.module.scss'
export function MenuItem({href, iconSrc, text}) {
  return <li className={scss.item}>
    <a href={href}>
      <div className={scss.icon}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
    <g className="nc-icon-wrapper">
        <path fill="#F4900C" d="M15 4a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"></path>
        <path fill="#DD2E44" d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"></path>
        <path fill="#FFCC4D" d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"></path>
        <path fill="#744EAA" d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"></path>
    </g>
</svg>
      </div>
      <p className={scss.text}>
        {text}
      </p>
    </a>
  </li>
}