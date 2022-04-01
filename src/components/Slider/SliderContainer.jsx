import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Slide from './index'

export default function SliderContainer({ images }) {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    function setWidth() {
      console.log('width? ', window.innerWidth)
      setScreenWidth(() => window.innerWidth)
    }

    if(window) {
      window?.addEventListener('resize', () => setWidth())
    }

    return () => window?.removeEventListener('resize', () => setWidth())
  }, [])

  return (
    <div className={classNames("carousel")}
      style={{
        ...(() => {
          if(screenWidth === 0) {
            return {}
          }
            if(screenWidth <= 521) {
              return { maxWidth: '70%' }
            }
            if(screenWidth <= 765) {
              return { maxWidth: '72%' }
            }

            if(screenWidth <= 1024) {
              console.log('hey', screenWidth)
              return { maxWidth: '66%' }
            }

          return {
            maxWidth: '100%'
          }
        })()
      }}>
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
