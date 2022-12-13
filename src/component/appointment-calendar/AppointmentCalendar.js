import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { LoadingContext } from '../../contexts/LoadingContext';
import { AlertContext } from '../../contexts/AlertContext';
import { postAppointment } from '../../services/user-service';
import AppointmentBtn from './AppointmentBtn';
import CustomCalendar from '../calendar/CustomCalendar';
import { getAppointmentsAvailability } from '../../services/user-service';
import styles from './AppointmentCalendar.module.scss';

const AppointmentCalendar = ({ userId }) => {
  const { setAlert } = useContext(AlertContext);
  const { setIsLoadingShown } = useContext(LoadingContext);
  const {
    user: { _id },
  } = useSelector((state) => state.user);
  const [resData, setResData] = useState();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    getAppointmentsAvailability(userId).then((res) => {
      if (res.resultType === 'success') setResData(res.data);
    });
  }, []);

  const setSelectedTime = (time) => setTime(time);

  const postNewAppointment = async () => {
    setIsLoadingShown(true);
    const dateFormatted = moment(date).format();
    const timeFormatted = moment(time, ['h:mm A']).format('HH:mm');
    const combined = dateFormatted.split('T')[0] + `T${timeFormatted}`;
    const newTimestamp = Date.parse(combined);
    const { data } = await postAppointment({
      created_by: _id,
      target_user: userId,
      datetime: newTimestamp,
    });
    setAlert({ message: data.message, type: 'success' });
    setIsLoadingShown(false);
  };

  return (
    <>
      <div className={styles.container}>
        <CustomCalendar resData={resData} date={date} setDate={setDate} />
        <div>
          {resData && date && (
            <AppointmentBtn
              resData={resData}
              date={date}
              onTimeChange={setSelectedTime}
              onSubmit={postNewAppointment}
              time={time}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentCalendar;
