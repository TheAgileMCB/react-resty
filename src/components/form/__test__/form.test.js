import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../form';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form></Form>, div)
});

it("renders form correctly", () => {
    const {getByTestId} = render(<Form label="URL: GO!GETPOSTPUTDELETE"></Form>);
    expect (getByTestId('form')).toHaveTextContent("URL: GO!GETPOSTPUTDELETE");
});

it("matches snapshot", () => {
    const tree = renderer.create(<Form label="URL: GO!GETPOSTPUTDELETE"></Form>).toJSON();
    expect(tree).toMatchSnapshot();
})