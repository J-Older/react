import React from 'react'
import s from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import Loader from "../Common/Loader/Loader";

const Users = (props) => {

    let userItem = props.users.map((el) => <UserItem key={el.id}
                                                     id={el.id}
                                                     name={el.name}
                                                     photos={el.photos}
                                                     status={el.status === null ? undefined : el.status}
                                                     followed={el.followed}
                                                     location={el.location === undefined ? undefined : el.location}
                                                     follow={props.followUser}
                                                     unfollow={props.unfollowUser}/>);

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>

            <div className={s.pagesCount}>
                {pages.map((p) => <span className={props.currentPage === p && s.selectedPage}
                                        onClick={() => props.onPageChange(p)}>{p}</span>)}
            </div>

            <Loader/>

            {userItem}

        </div>
    )
};


export default Users;

// class Users extends React.Component {
//
//     componentDidMount(): void {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount)
//             });
//     }
//
//     onPageChange(p) {
//         this.props.setCurrentPage(p);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount)
//             });
//     }
//
//     render() {
//
//         let userItem = this.props.users.map((el) => <UserItem key={el.id}
//                                                               id={el.id}
//                                                               name={el.name}
//                                                               photos={el.photos}
//                                                               status={el.status === null ? undefined : el.status}
//                                                               followed={el.followed}
//                                                               location={el.location === undefined ? undefined : el.location}
//                                                               follow={this.props.followUser}
//                                                               unfollow={this.props.unfollowUser}/>);
//
//         let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
//
//         let pages = [];
//
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//
//         return (
//             <div className={s.users}>
//
//                 <div className={s.pagesCount}>
//                     {pages.map((p) => {
//                         return <span className={this.props.currentPage === p && s.selectedPage}
//                                      onClick={() => this.onPageChange(p)}>{p}</span>
//                     })}
//                 </div>
//
//                 <Loader/>
//                 {userItem}
//             </div>
//         )
//     }
// }
//
// export default Users;