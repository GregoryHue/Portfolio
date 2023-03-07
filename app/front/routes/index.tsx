import Typography from '@mui/material/Typography';
import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

function AllIndex(): ReactElement {
  const { t } = useTranslation();

  return (
    <div>
      <div className="home-title">
        <Typography className="name">Gregory Hue</Typography>
        <Typography className="sub-title">IT Engineer</Typography>
      </div>
      <div className="home-text">
        <Typography className="text">{t('home.text')}</Typography>
      </div>
    </div>
  );
}

export default AllIndex;
