import scss from "./index.module.scss";
export function PostCard({ post}) { 
  return (
    <article className={scss.container} aria-label="유저 포스트" >
      <div className={scss.wrap}>
        <div className={scss.profileWrap}>
          <div className={scss.thumbnail}>
            <a href="#">
              <img src={post.writer.thumbnail} alt="thumbnail" />
            </a>
          </div>
          <a href="#" className={scss.profile}>
            <p className={scss.name}>{post.writer?.name}</p>
            <p className={scss.date}>16, Dept</p>
          </a>
        </div>

        <div className={scss.content}>
          <h2 className={scss.title}>
            <a href="#">{post.title}</a>
          </h2>
          <div className={scss.md}>
            <p>모두 잘 지내셨나요? 우리는 오늘 여러가지 주제에 대해 토론했습니다. 그 중 흥미로웠던 점에 대해서 이야기 하고 싶습니다.</p>
          </div>
          <div className={scss.tagWrap}>
            <p className={scss.tag}></p>
          </div>
          {/* 바텀 */}
          <div className={scss.bottom}>
            <div className={scss.left}>
              <a href="#" className={scss.details} aria-label="리액션, 클릭 시 게시글로 이동" >
                <span className="material-symbols-rounded">chat_bubble</span>
                <p className={scss.detailCount}>{post.comments.length}</p>
                <p className={scss.detailName}>reacionts</p>
              </a>
              <a href="#" className={scss.details} aria-label="댓글, 클릭 시 게시글로 이동" >
                <span className="material-symbols-rounded">Notes</span>
                <p className={scss.detailCount}>{post.like}</p>
                <p className={scss.detailName}>reacionts</p>
              </a>
            </div>
            <div className={scss.right}>
              <button>
                <span className="material-symbols-rounded">military_tech</span> 
              </button>
            </div>
          </div>

          <div className={scss.commentWrap}></div>
        </div>
      </div>
    </article>
  );
}
