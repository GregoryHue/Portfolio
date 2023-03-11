import { useEffect, useState, type ReactElement } from "react";
import ResumeText from "~/components/ResumeText";
import ResumeSubTitle from "~/components/ResumeSubTitle";
import ResumeTitle from "~/components/ResumeTitle";
import ResumeSection from "~/components/ResumeSection";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";
import { prisma } from "~/utils/prisma.server";

import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const techno = await prisma.text.findFirst({
    where: { id: 1 }
  });

  return json({ techno });
};

function ResumeView(): ReactElement {
  const { t } = useTranslation();
  const { techno } = useLoaderData();

  return (
    <div>
      <ResumeSection message={t("resume.title.formation")} />
      <ResumeTitle
        left={t("resume.content.formation.cesi.title-left")}
        right={t("resume.content.formation.cesi.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.formation.cesi.sub-title-left")}
        right={t("resume.content.formation.cesi.sub-title-right")}
      />
      <ResumeText message={t("resume.content.formation.cesi.text")} />

      <Divider className="divider large" />

      <ResumeSection message={t("resume.title.pro-exp")} />
      <ResumeTitle
        left={t("resume.content.pro-exp.jamnik.title-left")}
        right={t("resume.content.pro-exp.jamnik.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.jamnik.sub-title-left")}
        right={t("resume.content.pro-exp.jamnik.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.jamnik.text")} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t("resume.content.pro-exp.quiid1.title-left")}
        right={t("resume.content.pro-exp.quiid1.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.quiid1.sub-title-left")}
        right={t("resume.content.pro-exp.quiid1.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.quiid1.text")} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t("resume.content.pro-exp.quiid2.title-left")}
        right={t("resume.content.pro-exp.quiid2.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.quiid2.sub-title-left")}
        right={t("resume.content.pro-exp.quiid2.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.quiid2.text")} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t("resume.content.pro-exp.quiid2.title-left")}
        right={t("resume.content.pro-exp.quiid2.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.quiid2.sub-title-left")}
        right={t("resume.content.pro-exp.quiid2.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.quiid2.text")} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t("resume.content.pro-exp.greenbig.title-left")}
        right={t("resume.content.pro-exp.greenbig.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.greenbig.sub-title-left")}
        right={t("resume.content.pro-exp.greenbig.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.greenbig.text")} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t("resume.content.pro-exp.artelia.title-left")}
        right={t("resume.content.pro-exp.artelia.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.artelia.sub-title-left")}
        right={t("resume.content.pro-exp.artelia.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.artelia.text")} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t("resume.content.pro-exp.kaf-wan.title-left")}
        right={t("resume.content.pro-exp.kaf-wan.title-right")}
      />
      <ResumeSubTitle
        left={t("resume.content.pro-exp.kaf-wan.sub-title-left")}
        right={t("resume.content.pro-exp.kaf-wan.sub-title-right")}
      />
      <ResumeText message={t("resume.content.pro-exp.kaf-wan.text")} />

      <Divider className="divider large" />

      <ResumeSection message={techno.content ? techno.content : t("resume.title.techno.technologies")} />
      <ResumeTitle
        left={t("resume.title.techno.framework")}
        right={t("resume.title.techno.languages")}
      />
      <ResumeSubTitle
        left={"- React\n- Nodejs\n- Django\n- Vuejs\n- Slim\n- Laravel"}
        right={t("- JavaScript\n- TypeScript\n- Python\n- PHP\n- SQL\n- C#")}
      />
    </div>
  );
}

export default ResumeView;
