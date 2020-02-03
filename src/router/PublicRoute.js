import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = props => {
    const {isAuthed, component: Component, ...rest} = props;
    return (
        <Route {...rest} component={props => {
            if (!isAuthed)
                return (<Component {...props} />);
            return (<Redirect to={{pathname: `/dashboard`}} />)
        }} />
    )
}

const mapStateToProps = ({user}) => {
    return {
        isAuthed: !!user.token
    }
};

export default connect(mapStateToProps)(PublicRoute);