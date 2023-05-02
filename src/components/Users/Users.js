
import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/imgUser.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";
import s from "./users.module.css"


let Users = (props) => {
  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let slicedPages;
  let curPage = props.currentPage;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }
  return <div>

    <div>
      {slicedPages.map(p => {
       return  <span className={props.currentPage === p ? styles.selectedPage : ''}
       onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
      })}
    </div>

      {props.users.map((u) =>  <div className={s.userItem} key={u.id}>
          <span className={s.userMain}>
            <div>

              <NavLink to = {'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
              </NavLink>

            </div>
            <div>
              {u.followed ? (
                <button className={s.btnUser} disabled = {props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button className={s.btnUser} disabled = {props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.follow(u.id)}}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </span>
          <span className={s.userInfo}>
            <span>
              <div className={s.userName}>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span className={s.userDesc}>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>)}
      
      
    
      </div>
}



export default Users;
