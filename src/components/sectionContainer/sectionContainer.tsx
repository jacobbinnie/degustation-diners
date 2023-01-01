import { FC } from 'react'

import data from '../../demo.json'
import { Section } from '../section/section'

interface iSectionContainer {}

export const SectionContainer: FC<iSectionContainer> = () => {
  const courses = data.experiences.Terra.courses
  const coursesArray = Object.values(courses)

  const renderSections = Object.keys(courses).map(function (key, index) {
    return (
      <div
        className={`${
          coursesArray[index].type === 'poster'
            ? `snap-start pl-20`
            : coursesArray[index].type === 'cleanser'
            ? `snap-center pt-20 pb-10 lg:pl-0 lg:pr-10 md:pl-0 md:pr-5 sm:pl-0 sm:pr-0`
            : coursesArray[index].type === 'beverage'
            ? `snap-center pt-20 pb-20 lg:pl-10 lg:pr-10 md:pl-5 md:pr-5 sm:pl-0 sm:pr-0`
            : coursesArray[index].type === 'feature'
            ? `snap-center pt-20 pb-20`
            : `snap-center pt-20 pb-10 lg:pl-20 lg:pr-10 md:pl-10 md:pr-5 sm:pl-10 sm:pr-0`
        } box-border`}
        key={key}
      >
        <Section
          key={key}
          title={key}
          imageUrl={coursesArray[index].imageUrl}
          type={coursesArray[index].type}
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
