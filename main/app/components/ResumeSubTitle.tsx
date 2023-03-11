import { type ReactElement } from 'react'

function ResumeSubTitle (props: { left: string, right: string }): ReactElement {
  return (
    <div className="resume-sub-title">
      <p className="sub-title left">{props.left}</p>
      <p className="sub-title right">{props.right}</p>
    </div>
  )
}

export default ResumeSubTitle
