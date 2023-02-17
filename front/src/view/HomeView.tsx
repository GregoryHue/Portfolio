import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'
import { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

const HomeView = (): ReactElement => {
  const { t } = useTranslation()
  const [language, setLanguage] = useState<string | null>('en')
  const location = useLocation()

  return (
    <div>
      <div className="container-title">
        <Typography component="p" className="name">
          Gregory Hue
        </Typography>
        <Typography component="p" className="sub-title">
          IT Engineer
        </Typography>
      </div>
      <div className="container-text">
        <Typography component="p" className="text">
          {t('home.text')}
        </Typography>
      </div>
    </div>
  )
}

export default HomeView
