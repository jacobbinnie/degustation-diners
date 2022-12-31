import { FC } from 'react'

import data from '../../demo.json'
import { Section } from '../section/section'

interface iSectionContainer {}

export const SectionContainer: FC<iSectionContainer> = () => {
  const courses = data.experiences.Terra.courses
  const coursesArray = Object.values(courses)

  const renderSections = Object.keys(courses).map(function (key, index) {
    return (
      <div className="p-5 snap-start box-border" key={key}>
        <Section
          key={key}
          title={key}
          imageUrl={coursesArray[index].imageUrl}
        />
      </div>
    )
  })

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      {renderSections}
    </div>
  )
}
