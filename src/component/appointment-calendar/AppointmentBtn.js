import React, { useEffect, useState } from "react"
import styles from "./AppointmentCalendar.module.scss"

const AppointmentBtn = ({ resData, date }) => {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log("resData", resData)
    console.log("date", date)
  }, [])

  const clickHandler = (e) => {
    // console.log("e>>", e.target.textContent)
    // console.log("date", date)
    setTime(e.target.textContent)
  }

  const submitHandler = () => {
    const timeStamp = date.getTime()
    console.log(timeStamp)
    console.log(time)
  }
  return (
    // <div>
    //   {resData &&
    //     resData.map((monthArr, index) => {
    //       {
    //         monthArr.map((dateObj, i) => {
    //           // console.log("dateObj", dateObj)
    //           // var time = { options: { dateObj } }
    //           // console.log("options", dateObj.options)
    //           dateObj.options.map((option, index) => {
    //             return (
    //               <li key={index} className={styles.li}>
    //                 <button
    //                   disabled={!option.isAvailable}
    //                   onClick={clickHandler}
    //                   className={
    //                     option.time === time ? styles.active : styles.inActive
    //                   }>
    //                   {option.time}
    //                 </button>
    //               </li>
    //             )
    //           })
    //           // return (
    //           // <li key={i} className={styles.li}>
    //           //   <button
    //           //     disabled={!dateObj.isAvailable}
    //           //     onClick={clickHandler}
    //           //     className={
    //           //       dateObj.time === time ? styles.active : styles.inActive
    //           //     }>
    //           //     {/* {time.options.options} */}
    //           //   </button>
    //           // </li>
    //           // )
    //         })
    //       }
    //     })}
    //   <li className={styles.li}>
    //     <button onClick={submitHandler} className={styles.submitBtn}>
    //       Continue
    //     </button>
    //   </li>
    // </div>

    <div>
      {resData.map((data, index) => {
        return (
          <div>
            {data.map((date, index2) => {
              // console.log(date)
              return (
                <div>
                  {date.options.map((option, index3) => {
                    let dateTemp = date.date + "/" + date.month + "/" + "2022"
                    console.log(date)
                    // if(date.date + "-" + date.mont == dateTemp){

                    // }
                    console.log(dateTemp)
                    return (
                      <li key={index3} className={styles.li}>
                        <button
                          disabled={!option.isAvailable}
                          onClick={clickHandler}
                          className={
                            option.time === time
                              ? styles.active
                              : styles.inActive
                          }>
                          {option.time}
                        </button>
                      </li>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default AppointmentBtn
