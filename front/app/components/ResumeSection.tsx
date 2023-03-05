import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import { type ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function ResumeSection(props:{message:string}): ReactElement {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string | null>('en');
  const location = useLocation();

  return (
    <div className="resume-section">
      <Typography component="p" className="section">
        {props.message}
      </Typography>
    </div>
  );
}

export default ResumeSection;
