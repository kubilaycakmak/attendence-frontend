import React, { useState } from 'react'
import styles from './NewPassword.module.scss'
import CampImage from '../CampImage/CampImage'
const NewPassword = () => {
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(password)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>New Password</h2>
      <input
        id='name'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder='joe@gmail.com'
        className={styles.input}
      ></input>
      <button className={styles.button}>Submit</button>
      <CampImage className={styles.image} />
    </form>
  )
}

export default NewPassword
