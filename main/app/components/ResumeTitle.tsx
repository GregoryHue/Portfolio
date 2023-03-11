import { type ReactElement } from 'react'

function ResumeTitle (props: { left: string, right: string }): ReactElement {
  return (
    <div className="resume-title">
      <p className="title left">{props.left}</p>
      {props.right
        ? (
        <p className="title right">{props.right}</p>
          )
        : null}
    </div>
  )
}

export default ResumeTitle
