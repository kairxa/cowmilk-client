/**
 * Created by kairxa on 5/12/16.
 */

import React from 'react';

import styles from './style.css';

class Container extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;