import { fireEvent, render, screen } from "@testing-library/react"
import Input from "./Input"

describe("Input", () => {
  it("should render", () => {
    render(<Input placeholder="Input Component" />)

    const input = screen.getByPlaceholderText("Input Component")

    expect(input).toBeInTheDocument()
  })

  it("should change the input", () => {
    render(<Input placeholder="Input Component" />)

    const input = screen.getByPlaceholderText("Input Component")

    fireEvent.change(input, { target: { value: "Hello World" } })
    expect(screen.getByDisplayValue("Hello World") === input).toBe(true)
  })
})
