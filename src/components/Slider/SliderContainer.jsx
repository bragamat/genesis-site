import Slide from './index'

export default function SliderContainer({ images }) {
  return (
    <div className="carousel">
      {
        images.map((img, index, array) => (
          <Slide
            key={index}
            number={index}
            total={array.length}
            src={img.src}
            name={img.name}
            {...img.options}
          />
        ))
      }
    </div>
  )
}
