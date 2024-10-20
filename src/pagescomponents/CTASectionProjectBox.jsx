import React from 'react'
import { ctaSectionsProject } from '../mockdata/AndroidAppDevelopmment'
import CtaSectionProject from './CtaSectionProjects'

const CTASectionProjectBox = () => {
  return (
    <div>
       {ctaSectionsProject.map((section, index) => (
        <CtaSectionProject
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          buttonText={section.buttonText}
          buttonLink={section.buttonLink}
        />
      ))}
    </div>
  )
}

export default CTASectionProjectBox
