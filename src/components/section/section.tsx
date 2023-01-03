import { FC } from 'react'

interface iSection {
  title: string
  subtitle?: string
  imageUrl: string
  subImageUrl?: string
  type?: string
}

export const Section: FC<iSection> = ({ type, imageUrl }) => {
  return (
    // eslint-disable-next-line max-len
    <div
      // eslint-disable-next-line max-len
      className={`w-full h-[calc(100vh-100px)] bg-white drop-shadow-xl box-borderbg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <img src={imageUrl} alt="image" /> */}
      <h2 className="font-semibold">{type}</h2>
    </div>
  )
}
