import React from 'react'
import s from './ProfileInfo.module.css'
import Status from './ProfileStatus'

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>

            <div className={s.bgImage}>
                <img src={props.profileData.photos.large
                    ? props.profileData.photos.large
                    : 'https://alpha-cms.ru/style/user_icons/avatar_man.png'} alt=""/>
            </div>

            <div className={s.avatarImage}>
                <img src={props.profileData.photos.large
                        ? props.profileData.photos.large
                        : 'https://alpha-cms.ru/style/user_icons/avatar_man.png'}
                     alt=""/>
            </div>

            <div className={s.name}>
                <span>{props.profileData.fullName}</span>
            </div>

            <div className={s.id}>
                <span>@{props.profileData.userId}</span>
                <span><Status updateStatus={props.updateStatus} status={props.profilePage.status}/></span>
            </div>

        </div>
    )
};

export default ProfileInfo;