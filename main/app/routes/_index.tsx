import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

function AllIndex (): ReactElement {
  const { t } = useTranslation()

  return (
    <div>
      <div className="home-title">
        <p className="name">Gregory Hue</p>
        <p className="sub-title">IT Engineer</p>
      </div>
      <div className="home-text">
        <p className="text">{t('home.text')}</p>
      </div>
    </div>
  )
}

export default AllIndex
