import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const ProjectsView = (): ReactElement => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string | null>("en");
  const location = useLocation();

  return (
    <div className="container">
      <div className="container-title">
        <Typography component="p" className="title">
          Projects
        </Typography>
      </div>
    </div>
  );
};

export default ProjectsView;
