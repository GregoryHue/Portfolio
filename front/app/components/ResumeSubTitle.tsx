import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function ResumeSubTitle(props:{left:string, right:string}): ReactElement {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string | null>('en');
  const location = useLocation();

  return (
    <div className="resume-sub-title">
      <Typography className="sub-title left">
        {props.left}
      </Typography>
      <Typography className="sub-title right">
        {props.right}
      </Typography>
    </div>
  );
}

export default ResumeSubTitle;
