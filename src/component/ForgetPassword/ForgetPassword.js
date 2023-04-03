import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ForgetPassword.module.scss'
import CampImage from '../CampImage/CampImage'
import { forgetPassword } from '../../services/authService'
import PrimaryBtn from '../ui/Modal/Btn/PrimaryBtn';
import SecondaryBtn from '../ui/Modal/Btn/SecondaryBtn'

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState();

  const handleSubmit = async (e) => {
    try {
      await forgetPassword(email).then(
        (res) => {
          console.log(res);
          if (res.status === 401) {
            throw new Error("user already existed");
          }
          if (res.resultType === "success") {
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
      <SecondaryBtn action={handleSubmit} >Submit</SecondaryBtn>
      {/* <button onClick={handleSubmit} className={styles.button}>Submit</button> */}
      <CampImage className={styles.image} />
    </div>
  )
}

export default ForgetPassword
