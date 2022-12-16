import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles2 from './FullCalendar.module.scss';
import ReservationCart from '../ReservationCart/ReservationCart';

const FullCalendarComponent = (data, startDateF, endDateF) => {
  const [events, setEvents] = useState([]);
  const [finalData, setFinalData] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  });
  const initialEvents = [
    {
      id: 1,
      title: 'All-day event',
      start: new Date(),
    },
    {
      id: 2,
      title: 'Timed event',
      start: new Date() + 'T12:05:00',
    },
  ];

  const renderEventContent = (eventContent) => {
    return (
      <>
        <span>{eventContent.timeText}</span>
        <b style={{ color: 'black' }}>{eventContent.event.title}</b>
      </>
    );
  };

  const handleDateClick = (e) => {
    // console.log(e)
  };

  const handleEventClick = (clickInfo) => {
    // console.log(clickInfo.event.title)
    clickInfo.event.remove();
  };

  const handleDateSelect = (selectInfo) => {
    // let title = prompt('Please enter event title')
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    // if (title) {

    calendarApi.addEvent({
      // title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    // let tempObj = {
    //   startDate: selectInfo.startStr,
    //   endDate: selectInfo.endStr,
    // }

    // setFinalData(tempObj)
    console.log(data);
    data.startDateF(selectInfo.startStr);
    data.endDateF(selectInfo.endStr);
    // console.log(selectInfo)
    // }
  };
  useEffect(() => {
    // console.log(`events: ${events}`)
  }, [events]);

  useEffect(() => {
    // console.log(`data:`, data)
  }, [data]);

  const handleEvents = (events) => {
    setEvents(events);
  };

  return (
    <div className={styles2.containerForBoth}>
      <div className={styles2.cart}>
        {data.data &&
          data.data.map((item, index) => {
            return <ReservationCart {...item} />;
          })}
      </div>
      <div className={styles2.fullCalendar}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          dayMaxEvents={true}
          weekends={true}
          eventContent={renderEventContent}
          initialEvents={initialEvents}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          select={handleDateSelect}
          eventsSet={handleEvents}
          eventAdd={(e) => {
            // console.log('A new event added', e)
          }}
          eventChange={(e) => console.log('event change')}
          eventDragStart={(e) => console.log('event is started to drag')}
          eventDragStop={(e) => console.log('event is stopped to drag')}
          eventRemove={(e) => {
            // console.log('event is deleted')
          }}
          headerToolbar={{
            // left: 'prev,next today',
            // center: 'title',

            right: 'dayGridMonth',
          }}
          firstDay={1}
          buttonText={{
            day: 'Day',
            prev: 'Previous',
            nextYear: 'Next Year',
            prevYear: 'Previous Year',
            next: 'Next',
            month: 'Month',
            today: 'Today',
          }}
          eventBackgroundColor={'lightblue'}
          // eventBorderColor={'purple'}
        />
      </div>

      {/* <h1>{finalData.startDate}</h1>
      <h1>{finalData.endDate}</h1> */}
    </div>
  );
};

export default FullCalendarComponent;
