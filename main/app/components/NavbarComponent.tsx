import { type ReactElement } from 'react'
import Link from 'next/link'

function NavBarComponent (): ReactElement {

  const pages = [
    { title:'home', href: '/',  as:'/home'},
    { title: 'resume', href: '/resume', as:'/resume' },
    { title: 'projects', href: '/projects', as:'/projects' }
  ]

  return (
    <div className="navbar">
      <ul>
        {pages.map((page: { title: string, href: string, as:string }, index: any) => (
          <li key={index}>
            <Link
              style={{ textDecoration: 'none' }}
              key={page.title}
              href={page.href}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBarComponent
