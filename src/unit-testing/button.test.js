import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

// UNIT WRAPPER
const Wrapper = (props) => { return (
    <input
        type={ 'submit' }
        value={ 'submit' }
        onClick={ props.func }
    />
)}

// TEST WRAPPER
test('input', () => {

    // SUBMIT FUNC
    const submit = jest.fn();

    // RENDER THE COMPONENT
    const component = render (
        <Wrapper func={ submit } />
    )

    // SELECT THE FIELD
    const field = component.container.querySelector('input');

    // RUN TESTS
    fireEvent.click(field)
    expect(submit.mock.calls.length).toBe(1)
})