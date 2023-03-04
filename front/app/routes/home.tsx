import Typography from '@mui/material/Typography';
import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

function Home(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="container-title">
        <Typography className="name">Gregory Hue</Typography>
        <Typography className="sub-title">IT Engineer</Typography>
      </div>
      <div className="container-text">
        <Typography className="text">{t('home.text')}</Typography>
      </div>
    </div>
  );
}

export default Home;
