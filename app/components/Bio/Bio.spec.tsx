import { render, screen } from '@testing-library/react'
import Bio from './Bio'

describe('Bio', () => {
  it('should not render any bio', () => {
    render(<Bio firstname='Bud' lastname='Weiser' />)
    expect(screen.getByText('Bud Weiser')).toBeInTheDocument()
  })

  it('should have a bio', () => {
    render(
      <Bio
        firstname='Luffy'
        lastname='Monkey'
        bio={`I'm gonna be the pirate king!`}
      />
    )
    expect(screen.getByText('Luffy Monkey')).toBeInTheDocument()
    expect(
      screen.getByText(`I'm gonna be the pirate king!`)
    ).toBeInTheDocument()
  })
})
