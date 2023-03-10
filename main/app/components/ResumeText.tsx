import Typography from '@mui/material/Typography';
import { type ReactElement, useState } from 'react';

function ResumeText(props:{message:string}): ReactElement {

  return (
      <div className="resume-text">
        <Typography className="text">
          {props.message}
        </Typography>
      </div>
  );
}

export default ResumeText;
