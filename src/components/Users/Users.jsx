import React from "react";
import s from "./Users.module.css";
import user from "../../assets/img/user.png";
import { NavLink} from "react-router-dom";




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    //
    return (

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selected : null}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

            {
                props.usersData.map(u => <div key={u.id}>
                    <span className={s.user__container}>
                        <div className={s.logo__container}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>

                                    <img alt='ava' className={s.logo}
                                         src={u.photos.small != null ? u.photos.small : user}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?

                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {props.unFollow(u.id)
                                            }} className={s.btn}>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {props.follow(u.id)
                                            }} className={s.btn}>Follow</button>
                                }
                                {/*<button className={s.btn}>Follow</button>*/}
                            </div>
                        </div>

                        <span className={s.info__container}>
                            <span className={s.name__container}>
                                <div>{u.name}</div><div>{u.status}</div>
                            </span>
                            {/*<span className={s.location__container}>*/}
                            {/*    <div>{u.location.city}</div><div>{u.location.country}</div>*/}
                            {/*</span>*/}
                        </span>

                    </span>
                </div>)
            }
        </div>

    )

}

export default Users;