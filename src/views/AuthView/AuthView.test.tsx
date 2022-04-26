import { render, screen } from "@testing-library/react";
import AuthView from "./AuthView";
import * as React from 'react';


describe('AuthView tests', () => {
    test("with active === 'siginin' should show signin data", () => {
        render(<AuthView isExpanded={false} active='signin'/>)

        expect(screen.getByText('Login', {exact:false})).toBeVisible()

        const backdrop = screen.queryByTestId('backdrop')
        expect(backdrop).not.toHaveStyle('height: 100%')
    })
    test("with active === 'signup' should show signup data", () => {
        render(<AuthView isExpanded={false} active='signup'/>)

        expect(screen.getByText('Cadastro', {exact: false})).toBeVisible()

        const backdrop = screen.queryByTestId('backdrop')
        expect(backdrop).not.toHaveStyle('height: 100%')
    })

    test('if expanded, backdrop should has height:100%;', () => {
        render(<AuthView isExpanded={true} active='signup'/>)
        
        const backdrop = screen.queryByTestId('backdrop')
        expect(backdrop).toHaveStyle('height: 100%')
    })
})