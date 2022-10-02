import React from 'react'
import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";


import Word from '../Word'

describe('Word', () => {
    it('renders correctly', () =>{
        render(<Word text="Test" onChange={() => {}}/>)

        expect(screen.getByRole('textbox')).toHaveTextContent('Test')
    })
})