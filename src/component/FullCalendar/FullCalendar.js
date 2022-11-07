import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import styles2 from './FullCalendar.module.scss'
import ReservationCart from '../ReservationCart/ReservationCart'
import { useState } from 'react'

const FullCalendarComponent = (data) => {
  const [events, setEvents] = useState([])
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
  ]
  const [result, setResult] = useState({
    data: [
      {
        _id: '63488f660e724fcdc1942f73',
        type: 'weekly',
        room_id: '6334eaf064e8a6df4ed2221c',
        status: 'Pending',
        start_date: '2022-10-13',
        end_date: '2022-10-14',
        start_time: '11:00',
        end_time: '12:30',
        duration: 12,
        __v: 0,
      },
      {
        _id: '63488f660e724fcdc1942f73',
        type: 'non-weekly',
        room_id: '6334eaf064e8a6df4ed2221c',
        status: 'Pending',
        start_date: '2022-10-16',
        end_date: '2022-10-16',
        start_time: '13:00',
        end_time: '14:30',
        duration: null,
        __v: 0,
      },
    ],
  })

  const renderEventContent = (eventContent) => {
    return (
      <>
        <span>{eventContent.timeText}</span>
        <b style={{ color: 'black' }}>{eventContent.event.title}</b>
      </>
    )
  }

  const handleDateClick = (e) => {
    // console.log(e)
  }

  const handleEventClick = (clickInfo) => {
    // console.log(clickInfo.event.title)
    clickInfo.event.remove()
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter event title')
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }
  useEffect(() => {
    // console.log(`events: ${events}`)
  }, [events])

  useEffect(() => {
    // console.log(`data:`, data)
  }, [data])

  const handleEvents = (events) => {
    setEvents(events)
  }

  return (
    <div className={styles2.containerForBoth}>
      <h3 className={styles2.title2}>Reservations</h3>
      <div className={styles2.cart}>
        {data.data &&
          data.data.map((item, index) => {
            return <ReservationCart {...item} />
          })}
      </div>
      <div className={styles2.fullCalendar}>
        <h3 className={styles2.title}>Get a reservation</h3>

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
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
    </div>
  )
}

export default FullCalendarComponent
