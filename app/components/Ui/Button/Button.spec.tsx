import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
  it("should render", () => {
    render(<Button>Click me!</Button>)

    expect(screen.getByText("Click me!")).toBeInTheDocument()
  })
})
