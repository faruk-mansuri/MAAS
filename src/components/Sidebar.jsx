import { links } from '@/utils/links'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
      {links.map((link) => {
        const { id, name, url, Icon } = link

        return (
          <NavLink
            to={url}
            key={id}
            className='flex items-center space-x-2 p-2 hover:bg-gray-200 rounded'
          >
            <Icon className='w-5 h-5' />
            <p>{name}</p>
          </NavLink>
        )
      })}
    </aside>
  )
}

export default Sidebar
