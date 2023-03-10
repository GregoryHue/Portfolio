import Typography from '@mui/material/Typography';
import { type ReactElement } from 'react';

function AllIndex(): ReactElement {

  return (
    <div>
      <div className="home-title">
        <Typography className="name">Gregory Hue</Typography>
        <Typography className="sub-title">IT Engineer</Typography>
      </div>
      <div className="home-text">
        <Typography className="text">{'home.text'}</Typography>
      </div>
    </div>
  );
}

export default AllIndex;
