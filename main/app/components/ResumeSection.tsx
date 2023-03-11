import { type ReactElement, useState } from 'react'

function ResumeSection (props: { message: string }): ReactElement {
  return (
    <div className="resume-section">
      <p className="section">
        {props.message}
      </p>
    </div>
  )
}

export default ResumeSection
