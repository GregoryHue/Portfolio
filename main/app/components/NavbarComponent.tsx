import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography/';
import { Link, useLocation } from 'react-router-dom';
import { type ReactElement, useState } from 'react';

import { Button, ButtonGroup, FormControlLabel, Switch, ToggleButton, ToggleButtonGroup } from '@mui/material';

function NavBarComponent(): ReactElement {
  const location = useLocation();
  const [alignment, setAlignment] = useState('en');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const pages = [
    { title: 'navbar.home', to: '/' },
    { title: 'navbar.resume', to: '/resume' },
    { title: 'navbar.projects', to: '/projects' },
  ];

  return (
    <Box className="navbar">
      <ul>
        {pages.map((page: { title: string; to: string }, index: any) => (
          <li key={index}>
            <Link style={{ textDecoration: 'none' }} key={page.title} to={page.to}>
              <Typography className={location.pathname === page.to ? 'active' : 'inactive'}>
                {page.title}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
      
    </Box>
  );
}

export default NavBarComponent;
