import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
  it("should render", () => {
    expect(1 + 1).toBe(2)
    render(<Button>Click me!</Button>)

    expect(screen.getByText("Click me!")).toBeInTheDocument()
  })
})
