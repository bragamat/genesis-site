import Slide from './index'

export default function SliderContainer({ images }) {
  return (
    <div className="carousel">
      {
        images.map(({src, name, ...rest}, index, array) => (
          <Slide
            key={index}
            number={index}
            total={array.length}
            src={src}
            name={name}
            {...rest}
          />
        ))
      }
    </div>
  )
}
