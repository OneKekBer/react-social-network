import React from "react";

import Profile from "./profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,

    updateStatusThunkCreator
} from "../../redux/profile-reducer";


import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import withRouter from "../common/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = this.props.myId;
        }
        this.props.getStatus(profileId)
        this.props.getProfile(profileId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
};


// let authRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => {
    return {
        status: state.ProfilePage.status,
        profile: state.ProfilePage.profile,
        myId: state.auth.id,
        isAuth: state.auth.isAuth,
    }

}


// export default connect(mapStateToProps, {getProfile: getProfileThunkCreator,})(withRouter(authRedirectComponent));


export default compose(
    connect(mapStateToProps, {
        getProfile: getProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
