import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import { Button, ButtonGroup, FormControlLabel, Switch } from '@mui/material';

function NavBarComponent(): ReactElement {
  const { t } = useTranslation();
  const location = useLocation();

  const pages = [
    { title: t('navbar.home'), to: '/home' },
    { title: t('navbar.resume'), to: '/resume' },
    { title: t('navbar.projects'), to: '/projects' },
  ];

  return (
    <Box className="navbar">
      <ul>
        {pages.map((page: { title: string; to: string }, index: any) => (
          <li key={index}>
            <Link style={{ textDecoration: 'none' }} key={page.title} to={page.to}>
              <Typography
                variant="h5"
                component="p"
                className={location.pathname.includes(page.to) ? 'active' : 'inactive'}
              >
                {page.title}
              </Typography>
            </Link>
          </li>
        ))}
        <ButtonGroup variant="text" color="primary" className="language-buttons">
          <Button><Typography component="p">Français</Typography></Button>
          <Button><Typography component="p">English</Typography></Button>
        </ButtonGroup>
      </ul>
    </Box>
  );
}

export default NavBarComponent;
