import Typography from '@mui/material/Typography';
import { type ReactElement, useState } from 'react';

function ResumeSection(props:{message:string}): ReactElement {

  return (
    <div className="resume-section">
      <Typography component="p" className="section">
        {props.message}
      </Typography>
    </div>
  );
}

export default ResumeSection;
