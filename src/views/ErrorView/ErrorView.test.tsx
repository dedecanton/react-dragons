import { screen, render } from "@testing-library/react";
import React from 'react'
import ErrorView from "./ErrorView";
import { BrowserRouter } from 'react-router-dom'

describe('ErrorView tests', () => {
    test('NotFound Error', () => {
        render(<BrowserRouter><ErrorView text='Not Found' image=""/></BrowserRouter>)
        
        const text = screen.getByText('Not Found')
        expect(text).toBeVisible()
    })
})