import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'

import Input from '../Input'



describe('Input', () => {
    describe('when rendering', () => {
        it('placeholder shows correctly', () =>{
            render(<Input placeholder="placeholder text" onChange={() => {}} value=""/>)
            expect(screen.getByRole('note')).toHaveTextContent('placeholder text')
        })

        it('value shows correctly', () =>{
            render(<Input placeholder="" onChange={() => {}} value="test"/>)
            expect(screen.getByRole('textbox')).toHaveValue('test')
        })
    })

    describe('when typing', () => {
        it('placeholder disappears', async () => {
            render(<Input placeholder="placeholder text" onChange={() => {}} value=""/>)
            expect(screen.getByRole('note')).toHaveTextContent('placeholder text')
            await userEvent.type(screen.getByRole('textbox'), "a")
            waitFor(() => {
                expect(screen.getByRole('note')).toHaveTextContent("")
            })
        })
    })
    
})