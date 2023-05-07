import { render, screen } from '@testing-library/react'
import Image from './Image'
describe('Image', () => {
  it('should have width and height of 150', () => {
    render(<Image data-testid='imageTest' width='150px' height='150px' />)

    expect(screen.getByTestId('imageTest')).toHaveAttribute('width', '150px')
    expect(screen.getByTestId('imageTest')).toHaveAttribute('height', '150px')
  })
})
