import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../form';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form></Form>, div)
});

it("renders form correctly", () => {
    const {getByTestId} = render(<Form label="URL: GO!GETPOSTPUTDELETE"></Form>);
    expect (getByTestId('form')).toHaveTextContent("URL: GO!GETPOSTPUTDELETE");
})