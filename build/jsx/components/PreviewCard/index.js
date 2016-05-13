/**
 * Created by kairxa on 4/29/16.
 */

import React from 'react';

import styles from './style.css';

class PreviewCardWrapper extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.children}
            </div>
        );
    }
}

class PreviewCard extends React.Component {
    static propTypes = {
        image: React.PropTypes.string,
        title: React.PropTypes.string.isRequired,
        createdAt: React.PropTypes.string.isRequired,
        totalViews: React.PropTypes.number,
        totalLikes: React.PropTypes.number,
        totalComments: React.PropTypes.number,
        description: React.PropTypes.string
    };

    static defaultProps = {
        image: 'http://placehold.it/1600x900',
        totalViews: 0,
        totalLikes: 0,
        totalComments: 0,
        description: ''
    };

    render() {
        // Since styling is a bit jerk for multi-line text (either it looks good, or it doesn't),
        // there is only two option. Either supply a description for the whole cluster, or not at all.
        // Even if you supply a description, it will only be limited for one line, instead of triple line like before.
        // Unfortunately, we can't use text-overflow: ellipsis even if we use one line, because flex is a bit jumpy.
        // Therefore, non-Chrome user will have to bear with slightly ugly view when there is long description supplied.

        // Just a shorthand for image preview below
        let backgroundImage = {
            backgroundImage: `url(${this.props.image})`
        };
        // Some options for toLocaleDateString function
        let dateOptions = {
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            day: 'numeric'
        };
        // Defines a new date based on createdAt parameter from props
        let date = new Date(this.props.createdAt);

        return (
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.image} style={backgroundImage}></div>
                    <img src={this.props.image} alt={this.props.title} hidden aria-hidden="false"/>
                </div>
                <div className={styles.textContainer}>
                    <span className={styles.title}>{this.props.title}</span>
                    <span className={styles.date}>{date.toLocaleDateString('en-US', dateOptions)}</span>
                    <span className={styles.totalViews}>Views: {this.props.totalViews}</span>
                    <span className={styles.totalLikes}>Likes: {this.props.totalLikes}</span>
                    <span className={styles.totalComments}>Comments: {this.props.totalComments}</span>
                    <span className={styles.description}>{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export {PreviewCardWrapper, PreviewCard};