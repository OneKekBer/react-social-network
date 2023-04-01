import React from "react";
import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator, setCurrentPage,
    toggleFollowingProgress,
    unFollowThunkCreator,
} from "../../redux/users-reducer";

import Users from "./Users";

import Preloader from "../common/preloader/preloader";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    geTotalUsersCount,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../redux/users-selector";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)//thunk
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)//thunk


    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to="/login" />;
        }
        //здесь уже кидаем в другой файл то что мы обработали(тут отправляем)
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users followed={this.props.followed}
                   usersData={this.props.usersData}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   // isAuth={this.props.isAuth}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//
//     return {
//         usersData: state.UsersPage.usersData,
//         pageSize: state.UsersPage.pageSize,
//         totalUsersCount: state.UsersPage.totalUsersCount,
//         currentPage: state.UsersPage.currentPage,
//         isFetching: state.UsersPage.isFetching,
//         followingInProgress: state.UsersPage.followingInProgress,
//
//
//     }
// }

let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// let authRedirectComponent = withAuthRedirect(UsersContainer)

// export default connect(mapStateToProps, //сюда пишем диспатчи чтобы они пришли в этот файл(тут получаем)
//
//     {
//         unFollow: unFollowThunkCreator(),
//         toggleFollowingProgress,
//         getUsers: getUsersThunkCreator,//getUsers колбэк мы его делаем так как в редусеры не попадает сама функция getUsersThunkCreator а она диспатчиться
//         follow: followThunkCreator,
//     }
// )(authRedirectComponent);

export default compose(
    connect(mapStateToProps, //сюда пишем диспатчи чтобы они пришли в этот файл(тут получаем)
    {
        unFollow: unFollowThunkCreator,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,//getUsers колбэк мы его делаем так как в редусеры не попадает сама функция getUsersThunkCreator а она диспатчиться
        follow: followThunkCreator,
        setCurrentPage,
        }
    ),
    withAuthRedirect,
)(UsersContainer)
