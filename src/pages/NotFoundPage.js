import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/404.png';
import styles from './NotFoundPage.module.scss';

class NotFoundPage extends React.Component{
    render(){
        return (
          <div className={styles.outer}>
            <div className={styles.image}>
              <img src={PageNotFound}  />
            </div>
            <p style={{textAlign:"center"}}>
              <Link className={styles.homeButton} to="/">Go to Home </Link>
            </p>
          </div>
        );
    }
}
export default NotFoundPage;