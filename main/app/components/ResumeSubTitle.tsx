import Typography from '@mui/material/Typography'
import { type ReactElement } from 'react'

function ResumeSubTitle (props: { left: string, right: string }): ReactElement {
  return (
    <div className="resume-sub-title">
      <Typography className="sub-title left">{props.left}</Typography>
      <Typography className="sub-title right">{props.right}</Typography>
    </div>
  )
}

export default ResumeSubTitle
