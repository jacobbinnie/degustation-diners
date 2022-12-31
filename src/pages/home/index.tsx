import { FC } from 'react'
import { Homepage } from './home'

interface iHomepageBuilder {}

export const HomepageBuilder: FC<iHomepageBuilder> = () => {
  return <Homepage />
}
