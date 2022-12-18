import React from 'react'
import Link from 'next/link'

const NavLink = ({item}) => {
  return (
    <li>
      <Link href={item.url} className={item.cName}>{item.name}</Link>
    </li>
  )
}

export default NavLink