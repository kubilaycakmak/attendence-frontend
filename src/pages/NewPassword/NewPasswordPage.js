import React from 'react'
import NewPassword from '../../component/NewPassword/NewPassword'
import styles from './NewPasswordPage.module.scss'
const NewPasswordPage = () => {
  return (
    <div className={styles.outerPage}>
        <NewPassword />
    </div>
  )
}

export default NewPasswordPage