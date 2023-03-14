import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
} from "../../redux/users-reducer";

import Users from "./Users";

import Preloader from "../common/preloader/preloader";
import {getUsers} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)

        getUsers(pageNumber, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
    }


    render() {

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
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        usersData: state.UsersPage.usersData,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,

    }
}

export default connect(mapStateToProps,

    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    }


    )(UsersContainer);
