import { fireEvent, render, screen } from '@testing-library/react'
import InputField from './InputField'

describe('InputField', () => {
  it('should render', () => {
    render(<InputField htmlFor='label' label='Label' />)

    const input = screen.getByTestId('label')
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    // onChange should not be optional. Remove this later
    fireEvent.change(input, { target: { value: 'Hello World' } })
  })

  it('should return an input text', () => {
    const mockOnChange = jest.fn()
    render(
      <InputField htmlFor='testId' label='Label' onChange={mockOnChange} />
    )

    const input = screen.getByTestId('testId')

    expect(input).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'Hello World' } })

    expect(mockOnChange).toBeCalled()
  })

  it('should show an error message', () => {
    render(
      <InputField htmlFor='errorTest' label='errorTest' error='Error Error' />
    )

    expect(screen.getByText('Error Error')).toBeInTheDocument()
  })
})
