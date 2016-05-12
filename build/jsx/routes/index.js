/**
 * Created by kairxa on 5/11/16.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

const PREPARATION = (state) => {
    return state;
};

@connect( PREPARATION => PREPARATION )
class App extends React.Component {
    constructor(props) {
        super(props);

        this.basicStyle = {
            fontFamily: `'Open Sans', 'sans-serif'`
        };
    }

    render() {
        return <div style={this.basicStyle}>{this.props.children}</div>;
    }
}

const ROUTES = (
    <Route path="/" component={App}>
        
    </Route>
);

export default ROUTES;