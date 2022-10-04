import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import "@testing-library/jest-dom";
import {jest} from '@jest/globals';
import userEvent from '@testing-library/user-event'

import GapFill from '../GapFill'

describe('GapFill', () => {
    describe('when rendering', () => {
        it('button is shown', () =>{
            render(<GapFill translation="" difficulty={0}/>)
            expect(screen.getByRole('button')).toBeInTheDocument()
        })

        it('words are rendered correctly', () => {
            render(<GapFill translation="This is a test translation" difficulty={1}/>)
            const inputs = screen.getAllByRole('textbox');

            // the translation consists of 5 words, there should be 1 textbox for each word
            expect(inputs).toHaveLength(5)
            
            // each word should have one character masked
            for (const input of inputs) {
                expect(input.value.includes("_")).toBeTruthy()
            }

        })
    })

    describe('when typing', () => {

        it('updates the words correctly', async () => {
            render(<GapFill translation="This is a test translation" difficulty={1}/>)
            
            const inputs = screen.getAllByRole('textbox');
            expect(inputs[0]).not.toHaveValue("This")
            await userEvent.type(inputs[0], "This")
            waitFor(() => {
                expect(inputs[0]).toHaveValue("This")
            })
        })
    })

    describe('when revealing solution', () => {
        it('updates style on correct solution', async () => {
            render(<GapFill translation="This is a test translation" difficulty={1}/>)
            expect(screen.getByRole('list')).toHaveClass('gap-fill')
            await userEvent.click(screen.getByRole('button'))
            waitFor(() => {
                expect(screen.getByRole('list')).toHaveClass('gap-fill--valid')
            })
        })
    })
})