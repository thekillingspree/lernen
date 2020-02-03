import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
    const { isAuthed, component: Component, ...rest} = props;
    return (
        <Route {...rest} component={props => {
            if (!isAuthed)
                return <Redirect to={{pathname: `/login`}} />
            return <Component {...props} />
        }} />
    )
}

const mapStateToProps = ({admin}) => {
    return {
        isAuthed: !!admin.token
    }
}

export default connect(mapStateToProps)(PrivateRoute);