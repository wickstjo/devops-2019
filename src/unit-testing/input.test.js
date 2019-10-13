import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

// UNIT WRAPPER
const Wrapper = (props) => {

    // UPDATE FIELD
    const update = (event) => {
        props.state.value = event.target.value;
    }

    return (
        <input
            type={ 'text' }
            value={ props.state.value }
            onChange={ update }
        />
    )
}

// TEST WRAPPER
test('input', () => {

    // COMPONENT STATE
    const state = {
        value: ''
    }

    // RENDER THE COMPONENT
    const component = render (
        <Wrapper state={ state } />
    )

    // SELECT THE FIELD
    const field = component.container.querySelector('input');

    // RUN TESTS
    fireEvent.change(field, { target: { value: 'testing of forms could be easier' }});
    expect(state.value).toBe('testing of forms could be easier');
})