import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login/Login'

describe('Test case for testing login', () => {
	let wrapper;
	test('username check', () => {
		wrapper = shallow(<Login />);
		wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'amitkumar' } });
		expect(wrapper.state('username')).toEqual('amitkumar');
	})
	it('password check', () => {
		wrapper = shallow(<Login />);
		wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'amit@123' } });
		expect(wrapper.state('password')).toEqual('amit@123');
	})

})

