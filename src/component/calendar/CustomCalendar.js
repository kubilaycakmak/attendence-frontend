import moment from 'moment/moment';
import React from 'react';
import Calendar from 'react-calendar';
import '../appointment-calendar/CustomCalendar.scss';

const CustomCalendar = ({ date, setDate }) => {
  const onChange = (date) => {
    // console.log("date from calen>>>>>>", date)
    // let dateTemp = moment(date).format("DD/MM/YYYY")
    setDate(date);
    // console.log("dateTemp from calen>>", dateTemp)
  };

  return (
    <div className="calendarWrap">
      <h2 className="h2">Select a Date & Time</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default CustomCalendar;
