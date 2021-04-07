import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('displays greeting', () => {
  render(<App />)

  const messageElement = screen.getByText(
    "Yahoo, you're not ready to move to the next stage!",
  )

  expect(messageElement).toBeInTheDocument()
})
