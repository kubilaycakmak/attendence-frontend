import React, { useState, useEffect } from "react"
import styles from "./ReservationCardList.module.scss"
import ReservationCard from "../ReservationCard/ReservationCard"
import axios from "axios"

const ReservationCardList = ({ roomData }) => {
  const [filterList, setFilterList] = useState(roomData)
  const [types, setTypes] = useState("all")
  const [floorArr, setFloorArr] = useState([])
  const floorList = new Set()

  useEffect(() => {
    setFilterList(roomData)
    filtered(types)
  }, [types])

  // useEffect(() => {
  //   const url = "https://attendance-backend-dev.herokuapp.com/api/rooms/"
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       // console.log("res", res)
  //       setFilterList(res.data)
  //     })
  //     .catch((error) => console.error(`Error:${error}`))
  // }, [])

  useEffect(() => {
    setFloorArr(filterFloors(filterList))
  }, [])

  // useEffect(() => {
  //   setFilterList(roomData)
  // }, [types])

  const classroomHandler = () => {
    setFilterList(roomData)
    setTypes("classroom")
  }
  const washroomHandler = () => {
    setFilterList(roomData)
    setTypes("washroom")
  }
  const roomSizeHandler = () => {
    setFilterList(roomData)
    setTypes("size")
  }
  const allHandler = () => {
    setTypes("all")
  }

  const filteredRoom = filterList.filter((classroom) => {
    // setFilterList(roomData)
    return classroom.type === "classroom"
  })
  const filteredWashroom = filterList.filter((washroom) => {
    // setFilterList(roomData)
    return washroom.type === "washroom"
  })

  const seatSize = filterList.filter((size) => {
    return size.total_seats ? size : ""
  })

  const filteredSize = filterList.sort((a, b) => {
    return a.total_seats < b.total_seats ? 1 : -1
  })

  const filterFloors = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
      floorList.add(arr[i].floor)
    }
    return Array.from(floorList).sort()
  }

  function filtered(types) {
    setFilterList(roomData)
    if (types == "classroom") {
      console.log("classroom", filteredRoom)
      setFilterList(filteredRoom)
    } else if (types === "washroom") {
      console.log("washroom", filteredWashroom)
      setFilterList(filteredWashroom)
    } else if (types === "size") {
      const seatSizeTemp = seatSize.sort((a, b) => {
        return a.total_seats < b.total_seats ? 1 : -1
      })
      setFilterList(seatSizeTemp)
    } else if (types === "all") {
      setFilterList(roomData)
    }
  }

  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.bigTitle}>Location & Direction</h2>
        <button>Add New Room</button>
      </div>
      <div className={styles.filterBtnContainer}>
        <button
          onClick={allHandler}
          className={types === "all" ? styles.active : styles.inActive}>
          All
        </button>
        <button
          onClick={classroomHandler}
          className={types === "classroom" ? styles.active : styles.inActive}>
          Classroom
        </button>
        <button
          onClick={washroomHandler}
          className={types === "washroom" ? styles.active : styles.inActive}>
          Washroom
        </button>
        <button
          onClick={roomSizeHandler}
          className={types === "size" ? styles.active : styles.inActive}>
          Room Size
        </button>
      </div>
      <div className={styles.reservationCardList}>
        {floorArr.length !== 0 &&
          floorArr.map((floor, index) => {
            const found = filterList.some((el) => el.floor === floor)
            // console.log("found", found)
            return (
              <div>
                {found ? (
                  <h1 className={styles.floorTitle} key={index}>
                    {floor} Floor
                  </h1>
                ) : (
                  <p>NO RESULT</p>
                )}

                {/* {found ? (
                  <h1 className={styles.floorTitle} key={index}>
                    {floor} Floor
                  </h1>
                ) : (
                  <p>NOT FOUND</p>
                )} */}
                {filterList.map((info, index) => {
                  return (
                    <>
                      {floor === info.floor ? (
                        <>
                          <ReservationCard info={info} key={index} />
                        </>
                      ) : null}
                    </>
                  )
                })}
              </div>
            )
          })}
      </div>
    </>
  )
}

export default ReservationCardList
