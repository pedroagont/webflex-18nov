import React from 'react'
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App'

test('App should render', async () => {
    const screen = render(<App />)

    await expect.element(screen.getByText('Hello from app! 👽')).toBeVisible()
    await expect.element(screen.getByText('My amazing store!')).toBeVisible()
})