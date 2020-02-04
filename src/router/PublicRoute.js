import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = props => {
    const {isAuthed, component: Component, user, admin, ...rest} = props;
    return (
        <Route {...rest} component={props => {
            if (!isAuthed)
                return (<Component {...props} />);
            return (<Redirect to={{pathname: user.token ? `/dashboard` : '/admin/dashboard'}} />)
        }} />
    )
}

const mapStateToProps = ({user, admin}) => {
    return {
        isAuthed: !!user.token || !!admin.token,
        user,
        admin
    }
};

export default connect(mapStateToProps)(PublicRoute);