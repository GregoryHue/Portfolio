import { type ReactElement, useState } from 'react'

function ResumeText (props: { message: string }): ReactElement {
  return (
    <div className="resume-text">
      <p className="text">{props.message}</p>
    </div>
  )
}

export default ResumeText
