import { render, screen } from "@testing-library/react"
import Label from "./Label"

describe("Label", () => {
  it("should render", () => {
    render(<Label>This is a label!</Label>)

    expect(screen.getByText("This is a label!")).toBeInTheDocument()
  })
})
