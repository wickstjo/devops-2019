import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import Header from '../components/header';

// AFTER EACH TEST, RESET CANVAS
afterEach(cleanup)

// TEST HEADER
test('header', () => {

    // HEADER TEST VALUE
    const value = 'This is a header';

    // RENDER COMPONENT
    const component = render(
        <Header text={ value } />
    )

    // RUN TEST
    expect(component.container).toHaveTextContent('This is a header');
})