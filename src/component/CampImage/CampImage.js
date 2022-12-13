import React, { useState, useEffect } from 'react'
import campMobile from './summercamp-mobile.png'
import campWeb from './summercamp-web.png'
import styles from './campImage.module.scss'

const CampImage = () => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (window) {
      if (window.innerWidth > 768) {
        setImage(campWeb)
      } else {
        setImage(campMobile)
      }
    }
  }, [])

  return <img src={image} alt='camp' className={styles.campImage} />
}

export default CampImage
