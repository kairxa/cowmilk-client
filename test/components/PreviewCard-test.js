/**
 * Created by kairxa on 4/29/16.
 */

import React from 'react';
import { shallow } from 'enzyme';

import {PreviewCardWrapper, PreviewCard} from '../../build/jsx/components/PreviewCard';
import PreviewCardStyles from '../../build/jsx/components/PreviewCard/style.css';

const data = {
    image: 'http://placehold.it/1600x900',
    title: 'Album Name',
    createdAt: '1970-01-01T00:00:00Z',
    totalViews: 9001,
    totalLikes: 378,
    totalComments: 101,
    description: 'Assertively reinvent vertical web services after synergistic web services. Authoritatively e-enable excellent processes for inexpensive.'
};
const wrapper = shallow(
    <PreviewCard
        image={data.image}
        title={data.title}
        createdAt={data.createdAt}
        totalViews={data.totalViews}
        totalLikes={data.totalLikes}
        totalComments={data.totalComments}
        description={data.description}/>
);

const emptyWrapper = shallow(
    <PreviewCard />
);

describe(`Given a <PreviewCardWrapper />, it`, function() {
    it(`should give empty wrapper when there is no children`, function() {
        expect(shallow(<PreviewCardWrapper />).contains(<div className={PreviewCardStyles.wrapper}></div>)).toBe(true);
    });

    it(`should show children when given so`, function() {
        const wrapperContainer = shallow(
            <PreviewCardWrapper>
                <PreviewCard />
            </PreviewCardWrapper>
        );

        expect(wrapperContainer.contains(<PreviewCard />)).toBe(true);
    });
});

describe(`Given data in PreviewCard-test to <PreviewCard />, it`, function() {
    it(`contains an element with style property as PreviewCard cover`, function() {
        var backgroundImage = {
            backgroundImage: `url(${data.image})`
        };

        expect(wrapper.contains(<div className={PreviewCardStyles.image} style={backgroundImage}></div>)).toBe(true);
    });
    
    it(`contains img element with aria-hidden false as disability helper`, function() {
        expect(wrapper.contains(<img src={data.image} alt={data.title} hidden aria-hidden="false"/>)).toBe(true);
    });

    it(`contains an element which renders title`, function() {
        expect(wrapper.contains(<span className={PreviewCardStyles.title}>{ data.title }</span>)).toBe(true);
    });

    it(`contains an element which renders createdAt as human-readable string`, function() {
        var dateOptions = {
            weekday: 'long',
            month: 'long',
            year: 'numeric',
            day: 'numeric'
        };
        var date = new Date(data.createdAt);

        expect(wrapper.contains(<span className={PreviewCardStyles.date}>{date.toLocaleDateString('en-US', dateOptions)}</span>)).toBe(true);
    });

    it(`contains an element which renders totalViews`, function() {
        expect(wrapper.contains(<span className={PreviewCardStyles.totalViews}>Views: {data.totalViews}</span>)).toBe(true);
    });

    it(`contains an element which renders totalLikes`, function() {
        expect(wrapper.contains(<span className={PreviewCardStyles.totalLikes}>Likes: {data.totalLikes}</span>)).toBe(true);
    });

    it(`contains an element which renders totalComments`, function() {
        expect(wrapper.contains(<span className={PreviewCardStyles.totalComments}>Comments: {data.totalComments}</span>)).toBe(true);
    });

    it(`contains an element which renders description`, function() {
        expect(wrapper.contains(<span className={PreviewCardStyles.description}>{data.description}</span>)).toBe(true);
    });
});

describe(`Given an empty <PreviewCard />, it`, function() {
    it(`should not have createdAt`, function() {
        expect(emptyWrapper.props().createdAt).not.toBeDefined();
    });

    it(`should not have title`, function() {
        expect(emptyWrapper.props().title).not.toBeDefined();
    });

    it(`should have placehold.it as image`, function() {
        var backgroundImage = {
            backgroundImage: `url(http://placehold.it/1600x900)`
        };

        expect(emptyWrapper.contains(<div className={PreviewCardStyles.image} style={backgroundImage}></div>)).toBe(true);
    });

    it(`should have 0 as totalViews`, function() {
        expect(emptyWrapper.contains(<span className={PreviewCardStyles.totalViews}>Views: {0}</span>)).toBe(true);
    });

    it(`should have 0 as totalLikes`, function() {
        expect(emptyWrapper.contains(<span className={PreviewCardStyles.totalLikes}>Likes: {0}</span>)).toBe(true);
    });

    it(`should have 0 as totalComments`, function() {
        expect(emptyWrapper.contains(<span className={PreviewCardStyles.totalComments}>Comments: {0}</span>)).toBe(true);
    });
    
    it(`should not have any description`, function() {
        expect(emptyWrapper.contains(<span className={PreviewCardStyles.description}>{''}</span>)).toBe(true);
    });
});