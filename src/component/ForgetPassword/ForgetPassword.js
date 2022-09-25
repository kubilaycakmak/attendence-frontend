import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ForgetPassword.module.scss'
import CampImage from '../CampImage/CampImage'
import { forget } from '../../services/auth-service'


const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState();

  const handleSubmit = async (e) => {
    try {
      await forget(email).then(
        (res) => {
          if (res.status === 401) {
            throw new Error("user already existed");
          }
          if (res.status === 200) {
            navigate("/login")
            setMessage("Please check your email inbox!");
          }
        }
      );
    } catch (error) {
      setMessage(error.message);
    }
  }




  return (
    <div className={styles.form} >
      <h2 className={styles.title}>Forget Password</h2>
      <input
        id='name'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='joe@gmail.com'
        className={styles.input}
      ></input>
      <button onClick={handleSubmit} className={styles.button}>Submit</button>
      <CampImage className={styles.image} />
    </div>
  )
}

export default ForgetPassword
