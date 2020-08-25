import React from 'react'
import s from './UserItem.module.css'

const UserItem = (props) => {
    return (
        <div className={s.userItem}>

            <div className={s.userAvatar}>
                <img src={props.photos.large ? props.photos.large : 'https://alpha-cms.ru/style/user_icons/avatar_man.png'}
                     alt="userAvatar"/>
            </div>

            <div className={s.userBody}>

                <div className={s.userName}>

                    {props.followed

                        ? <button className={props.followed ? s.unfollowed : s.followed}
                                  onClick={() => {
                                      props.unfollow(props.id)
                                  }}>
                            <span className={s.unfollow}>Unfollow</span>
                        </button>

                        : <button className={props.followed ? s.unfollowed : s.followed}
                                  onClick={() => {
                                      props.follow(props.id)
                                  }}>
                            <span className={s.follow}>+ Follow</span>
                        </button>}

                    {props.name}

                    <div className={s.location}>
                        <span className={s.city}>{props.location === undefined ? 'No city' : props.location.city}</span>
                        <span className={s.country}>{props.location === undefined ? 'No country' : props.location.country}</span>
                    </div>

                </div>

                <div>
                    {props.status === undefined ? 'No status specified' : props.status}
                </div>

            </div>


        </div>
    )
};

export default UserItem;