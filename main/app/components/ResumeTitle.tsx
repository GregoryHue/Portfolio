import Typography from '@mui/material/Typography'
import { type ReactElement } from 'react'

function ResumeTitle (props: { left: string, right: string }): ReactElement {
  return (
    <div className="resume-title">
      <Typography className="title left">{props.left}</Typography>
      {props.right
        ? (
        <Typography className="title right">{props.right}</Typography>
          )
        : null}
    </div>
  )
}

export default ResumeTitle
