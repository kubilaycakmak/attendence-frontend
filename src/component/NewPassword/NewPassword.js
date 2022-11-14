import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './NewPassword.module.scss'
import CampImage from '../CampImage/CampImage'
import { newPassword } from '../../services/auth-service'
import { useSearchParams } from "react-router-dom";

const NewPassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  // const [token, setToken] = useState("");
  // get token from url slug..

  const handleSubmit = async() => {
    let token = searchParams.get("token");
    if(password !== password2){
      setMessage("Please enter passwords same")
    }
    try {
      await newPassword(id, password, token).then(
        (res) => {
          if (res.status === 200) {
            navigate("/login")
          }
        }
      );
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
  }
  
  return (
    <div className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>New Password</h2>
      <input
        id='name'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder='password'
        className={styles.input}
      ></input>
      <input
        id='name'
        type='password'
        onChange={(e) => setPassword2(e.target.value)}
        value={password2}
        placeholder='password again'
        className={styles.input}
      ></input>
      {message && <p className='mb-3'>{message}</p>}
      <button className={styles.button} onClick={handleSubmit}>Submit</button>
      <CampImage className={styles.image} />
    </div>
  )
}

export default NewPassword
