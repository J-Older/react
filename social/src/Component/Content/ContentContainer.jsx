import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import {LogOutMe} from "../../redux/authReducer";

class ContentContainer extends React.Component {

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    authorization: state.authorization,
});

export default connect(mapStateToProps, {LogOutMe})(ContentContainer);
