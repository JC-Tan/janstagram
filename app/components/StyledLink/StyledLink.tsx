import { Link } from '@remix-run/react'
import { useState } from 'react'

interface IStyledLink {
  color?: string
  text: string
  to: string
}

const StyledLink = ({ color, text, to }: IStyledLink) => {
  const [style, setStyle] = useState({
    color: color,
    'font-size': '0.875rem',
    cursor: 'pointer',
    textDecoration: 'none',
  })
  return (
    <Link to={to} style={style}>
      {text}
    </Link>
  )
}

export default StyledLink
