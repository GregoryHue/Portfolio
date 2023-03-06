import Typography from '@mui/material/Typography';
import { type ReactElement } from 'react';

function ProjectsView(): ReactElement {

  return (
    <div className="container">
      <div className="home-title">
        <Typography component="p" className="title">
          Projects
        </Typography>
      </div>
    </div>
  );
}

export default ProjectsView;
