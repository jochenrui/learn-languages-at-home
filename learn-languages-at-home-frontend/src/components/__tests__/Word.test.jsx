import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import "@testing-library/jest-dom";
import {jest} from '@jest/globals';
import userEvent from '@testing-library/user-event'

import Word from '../Word'

describe('Word', () => {
    describe('when rendering', () => {
        it('text shows correctly', () =>{
            render(<Word text="test" onChange={() => {}}/>)
    
            expect(screen.getByRole('textbox')).toHaveValue('test')
        })
    })

    describe('When typing', () => {
        it('onChange is called', async () => {
            const mockedFunction = {function: (value) => {}}
            const spy = jest.spyOn(mockedFunction, 'function')
            render(<Word text="" onChange={mockedFunction.function}/>)
            await userEvent.type(screen.getByRole('textbox'), 'a')
            await waitFor(() => {
                expect(spy).toHaveBeenCalledWith("a")
            })
        })
    })
})