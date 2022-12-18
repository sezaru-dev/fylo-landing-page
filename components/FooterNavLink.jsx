import React from 'react'

const FooterNavLink = ({linkUrl, linkName}) => {
  return (
    <li>
      <a href={linkUrl} className='footer-links'>{linkName}</a>
    </li>
  )
}

export default FooterNavLink