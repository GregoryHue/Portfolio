import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import ResumeText from '~/components/ResumeText';
import ResumeSubTitle from '~/components/ResumeSubTitle';
import ResumeTitle from '~/components/ResumeTitle';
import ResumeSection from '~/components/ResumeSection';
import Divider from '@mui/material/Divider';

function ResumeView(): ReactElement {
  const { t } = useTranslation();

  return (
    <div>
      <ResumeSection message={'Education'} />
      <ResumeTitle
        left={t('resume.formation.cesi.title-left')}
        right={t('resume.formation.cesi.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.formation.cesi.sub-title-left')}
        right={t('resume.formation.cesi.sub-title-right')}
      />
      <ResumeText message={t('resume.formation.cesi.text')} />

      <Divider className="divider large" />

      <ResumeSection message={'Professional experiences'} />
      <ResumeTitle
        left={t('resume.pro-exp.jamnik.title-left')}
        right={t('resume.pro-exp.jamnik.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.jamnik.sub-title-left')}
        right={t('resume.pro-exp.jamnik.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.jamnik.text')} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t('resume.pro-exp.quiid1.title-left')}
        right={t('resume.pro-exp.quiid1.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.quiid1.sub-title-left')}
        right={t('resume.pro-exp.quiid1.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.quiid1.text')} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t('resume.pro-exp.quiid2.title-left')}
        right={t('resume.pro-exp.quiid2.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.quiid2.sub-title-left')}
        right={t('resume.pro-exp.quiid2.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.quiid2.text')} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t('resume.pro-exp.quiid2.title-left')}
        right={t('resume.pro-exp.quiid2.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.quiid2.sub-title-left')}
        right={t('resume.pro-exp.quiid2.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.quiid2.text')} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t('resume.pro-exp.greenbig.title-left')}
        right={t('resume.pro-exp.greenbig.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.greenbig.sub-title-left')}
        right={t('resume.pro-exp.greenbig.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.greenbig.text')} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t('resume.pro-exp.artelia.title-left')}
        right={t('resume.pro-exp.artelia.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.artelia.sub-title-left')}
        right={t('resume.pro-exp.artelia.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.artelia.text')} />
      <Divider className="divider medium" />
      <ResumeTitle
        left={t('resume.pro-exp.kaf-wan.title-left')}
        right={t('resume.pro-exp.kaf-wan.title-right')}
      />
      <ResumeSubTitle
        left={t('resume.pro-exp.kaf-wan.sub-title-left')}
        right={t('resume.pro-exp.kaf-wan.sub-title-right')}
      />
      <ResumeText message={t('resume.pro-exp.kaf-wan.text')} />

      <Divider className="divider large" />

      <ResumeSection message={'Technologies'} />
      <ResumeTitle
        left={'Framework'}
        right={'Languages'}
      />
      <ResumeSubTitle
        left={'- React\n- Nodejs\n- Django\n- Vuejs\n- Slim\n- Laravel'}
        right={t('- JavaScript\n- TypeScript\n- Python\n- PHP\n- SQL\n- C#')}
      />


    </div>
  );
}

export default ResumeView;
