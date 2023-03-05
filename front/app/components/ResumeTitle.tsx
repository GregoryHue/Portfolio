import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function ResumeTitle(props:{left:string, right:string}): ReactElement {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string | null>('en');
  const location = useLocation();

  return (
    <div className="resume-title">
      <Typography className="title left">
        {props.left}
      </Typography>
      {props.right ? 
      <Typography className="title right">
        {props.right}
      </Typography> : null }
    </div>
  );
}

export default ResumeTitle;
