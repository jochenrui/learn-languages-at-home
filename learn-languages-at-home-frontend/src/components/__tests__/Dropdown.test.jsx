import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import "@testing-library/jest-dom";
import {jest} from '@jest/globals';
import userEvent from '@testing-library/user-event'

import Dropdown from '../Dropdown'

describe('Dropdown', () => {
    describe('when rendering', () => {
        it('options render correctly', async () =>{
            render(<Dropdown options={['FR', 'DE']} onSelect={() => {}}/>)
            expect(screen.getByText('FR')).toBeInTheDocument()
            expect(screen.getByText('DE')).toBeInTheDocument()
        })

        it('shows default string "Select language" correctly', () => {
            render(<Dropdown options={[]} onSelect={() => {}}/>)
            expect(screen.getByText('Select language')).toBeInTheDocument()
        })
    })

    describe('when selecting option', () => {
        it('onChange is called', async () => {
            const mockedFunction = {function: (value) => {}}
            const spy = jest.spyOn(mockedFunction, 'function')
            render(<Dropdown options={['FR']} onSelect={mockedFunction.function}/>)
            await userEvent.selectOptions(screen.getByRole('combobox'),['FR'])
            await waitFor(() => {
                expect(spy).toHaveBeenCalledWith("FR")
            })
        }) 
    })
})