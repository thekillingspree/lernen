import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = props => {
    const {isAuthed, component: Component, ...rest} = props;
    return (
        <Route {...rest} component={props => {
            if (!isAuthed)
                return (<Component {...props} />);
            return (<Redirect to={{pathname: `/admin/dashboard`}} />)
        }} />
    )
}

const mapStateToProps = ({admin}) => {
    return {
        isAuthed: !!admin.token
    }
};

export default connect(mapStateToProps)(PublicRoute);