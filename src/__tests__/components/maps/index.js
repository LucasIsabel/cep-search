import React from 'react';
import Enzyme, {
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Maps from '../../../containers/maps';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Map component', () => {

    it('it shloud render component with rigth childs components', () => {
        const wrapper = shallow( < Maps / > )
        expect(wrapper).toMatchSnapshot()
    })

})