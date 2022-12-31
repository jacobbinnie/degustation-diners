import { FC } from 'react'

interface iSection {
  title: string
  subtitle?: string
  imageUrl: string
  subImageUrl?: string
  type?: 'entree' | 'main' | 'cleanser' | 'dessert' | 'beverage' | 'poster'
}

export const Section: FC<iSection> = ({ title }) => {
  return (
    // eslint-disable-next-line max-len
    <div className="w-full h-[calc(100vh-100px)] bg-white drop-shadow-xl box-border flex justify-center items-center">
      {/* <img src={imageUrl} alt="image" /> */}
      <h2 className="text-center font-semibold">{title}</h2>
    </div>
  )
}
