/**
 * Created by kairxa on 5/12/16.
 */

import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../build/jsx/components/Container';
import ContainerStyles from '../../build/jsx/components/Container/style.css';

describe(`<Container />`, function() {
    it(`has ContainerStyles.container as className`, function() {
        expect(shallow(<Container />).contains(<div className={ContainerStyles.container}></div>)).toBe(true);
    });

    it(`has children when supplied one`, function() {
        const child = <span>A child</span>;

        expect(shallow(<Container>{child}</Container>).contains(<div className={ContainerStyles.container}>{child}</div>)).toBe(true);
    });
});