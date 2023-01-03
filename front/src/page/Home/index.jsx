import { Header } from "../../components/header";
import { PostCard } from "../../components/home/PostCard";
import { PostGrid } from "../../components/home/PostGrid";
import Menu from "./../../components/home/Menu/index";
import scss from "./index.module.scss";
import { useState } from 'react';
const items = [
  {
    id: 0,
    href: "",
    iconSrc: "",
    text: "개발자 일상공유",
  },
  {
    id: 1,
    href: "",
    iconSrc: "",
    text: "고민거리",
  },
  {
    id: 2,
    href: "",
    iconSrc: "",
    text: "짤방 저장소",
  },
  {
    id: 3,
    href: "",
    iconSrc: "",
    text: "유머글",
  },
  {
    id: 4,
    href: "",
    iconSrc: "",
    text: "비교",
  },
];

const posts = [
  {
    id: 0,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Holy Guy",
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/54642373e4b024e8934bf4f4/8c711e5f-367a-43a8-8d43-ef18a3a04508/the+citadel.jpg",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    react: 0,
  },
  {
    id: 1,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Mara Papiyas",
      thumbnail:
        "https://post-phinf.pstatic.net/MjAxNzAxMTNfMTky/MDAxNDg0MjgzMTg2OTk2.dE6HdWh5BZoRd_3xmkmKem49VFTIZ06hD3ocp9hweRwg.dUQhMEO6R5bBhTlLeMZ5kicqlzUq0FethqCG4u-uK74g.JPEG/1.jpg?type=w1200",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    like: 0,
  },
  {
    id: 2,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Mara Papiyas",
      thumbnail:
        "https://post-phinf.pstatic.net/MjAxNzAxMTNfMTky/MDAxNDg0MjgzMTg2OTk2.dE6HdWh5BZoRd_3xmkmKem49VFTIZ06hD3ocp9hweRwg.dUQhMEO6R5bBhTlLeMZ5kicqlzUq0FethqCG4u-uK74g.JPEG/1.jpg?type=w1200",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    like: 0,
  },
  {
    id: 3,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Mara Papiyas",
      thumbnail:
        "https://post-phinf.pstatic.net/MjAxNzAxMTNfMTky/MDAxNDg0MjgzMTg2OTk2.dE6HdWh5BZoRd_3xmkmKem49VFTIZ06hD3ocp9hweRwg.dUQhMEO6R5bBhTlLeMZ5kicqlzUq0FethqCG4u-uK74g.JPEG/1.jpg?type=w1200",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    like: 0,
  },
  {
    id: 4,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Mara Papiyas",
      thumbnail:
        "https://post-phinf.pstatic.net/MjAxNzAxMTNfMTky/MDAxNDg0MjgzMTg2OTk2.dE6HdWh5BZoRd_3xmkmKem49VFTIZ06hD3ocp9hweRwg.dUQhMEO6R5bBhTlLeMZ5kicqlzUq0FethqCG4u-uK74g.JPEG/1.jpg?type=w1200",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    like: 0,
  },
  {
    id: 5,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Mara Papiyas",
      thumbnail:
        "https://post-phinf.pstatic.net/MjAxNzAxMTNfMTky/MDAxNDg0MjgzMTg2OTk2.dE6HdWh5BZoRd_3xmkmKem49VFTIZ06hD3ocp9hweRwg.dUQhMEO6R5bBhTlLeMZ5kicqlzUq0FethqCG4u-uK74g.JPEG/1.jpg?type=w1200",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    like: 0,
  },
  {
    id: 6,
    title: "오늘 개발 회의에서 있었던 흥미로운 이야기",
    date: "16, Dept",
    writer: {
      name: "Mara Papiyas",
      thumbnail:
        "https://post-phinf.pstatic.net/MjAxNzAxMTNfMTky/MDAxNDg0MjgzMTg2OTk2.dE6HdWh5BZoRd_3xmkmKem49VFTIZ06hD3ocp9hweRwg.dUQhMEO6R5bBhTlLeMZ5kicqlzUq0FethqCG4u-uK74g.JPEG/1.jpg?type=w1200",
    },
    comments: [
      {
        id: 0,
        writer: "Kyle",
        comment:
          "와. 매우 흥미로운 주제인 것 같아요. 진짜로 리얼루다가 와우 홀리..",
      },
    ],
    like: 0,
  },
];
 
export function Home({menuToggle}) { 
  return (
    <>
      <Header></Header>
      <div className={scss.container} >  
        <aside className={scss.sideBar} toggle={menuToggle ? 'true' : 'false'}> 
          <nav aria-label="주 메뉴" className={scss.mainNav} > 
            <Menu items={items}></Menu>
            <Menu
              title={"문의"} 
              items={items} 
            ></Menu>   
          </nav> 
          
           {
            menuToggle ? <button className={[scss.close, 'material-symbols-rounded'].join(' ')}>Close</button> : null
           }
        </aside>
        <main aria-label="메인 컨텐츠" className={scss.main}>
          <div className={scss.mainWrap}>
            <PostGrid posts={posts}></PostGrid>
          </div>
        </main>

        <aside aria-label="읽어 볼 거리" className={scss.subContent}>
            .
        </aside>
      </div>
    </>
  );
}
