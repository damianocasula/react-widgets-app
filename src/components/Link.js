import React from 'react'

const Link = ({ className, href, children }) => {
  const onClick = e => {
    e.preventDefault()
    window.history.pushState(null, null, href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  )
}

export default Link
