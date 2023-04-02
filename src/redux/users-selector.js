import React from "react";
import {createSelector} from "reselect";

export const getPageSize = (state)=>{
    return state.UsersPage.pageSize;
}
const getUsersDataSelector = (state)=>{
    return state.UsersPage.usersData
}
export const  getUsersData= createSelector(getUsersDataSelector, (usersData) => {
    return usersData.filter(u =>true)
})

export const getTotalUsersCount = (state)=>{
    return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state)=>{
    return state.UsersPage.currentPage
}
export const getIsFetching = (state)=>{
    return state.UsersPage.isFetching
}
export const getFollowingInProgress = (state)=>{
    return state.UsersPage.followingInProgress
}