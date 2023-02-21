import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'
import { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

const NavBarComponent = (): ReactElement => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState<string | null>('en')
  const location = useLocation()

  const pages = [
    { title: t('navbar.home'), to: '/home' },
    { title: t('navbar.resume'), to: '/resume' },
    { title: t('navbar.projects'), to: '/projects' }
  ]

  return (
      <Box sx={{ display: { xs: 'block', md: 'block' } }} className="navbar">
        <ul>
          {pages.map((page) => (
            <li>
              <Link style={{ textDecoration: 'none' }} key={page.title} to={page.to}>
                <Typography variant="h5" component="p" className={location.pathname.includes(page.to) ? 'active' : null}>
                  {page.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
  )
}

export default NavBarComponent
