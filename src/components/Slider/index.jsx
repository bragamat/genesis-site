import Link from 'next/link'
import Image from 'next/image'

export default function Slider({ src, ...rest }) {
  const calculateNextNumber = () => {

    if(rest.number === rest.total - 1){
      return 0
    }

    return rest.number + 1
  }

  const calculatePreviousNumber = () => {
    if(rest.number == 0){
      return rest.total - 1
    }

    return rest.number - 1
  }

  return(
    <div
      className="carousel-item relative w-full"
      id={`slide${rest.number}-${rest.name}`}
    >
    <Image
      className="rounded-xl shadow-xl ring-1 ring-black
      ring-opacity-5 lg:right-0 lg:h-full lg:w-auto
      lg:max-w-none relative w-full"
      width={700}
      height={700}
      src={src}
      {...rest}
    />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <Link href={`#slide${calculatePreviousNumber()}-${rest.name}`} passHref>
          <a className="btn btn-circle">❮</a>
        </Link>

        <Link href={`#slide${calculateNextNumber()}-${rest.name}`} passHref>
          <a className="btn btn-circle">❯</a>
        </Link>

      </div>
    </div>
  )
}
