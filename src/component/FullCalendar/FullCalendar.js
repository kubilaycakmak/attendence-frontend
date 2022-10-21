import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { styles } from '@material-ui/pickers/views/Calendar/Calendar'
import styles2 from './FullCalendar.module.scss'
import { useState } from 'react'

const FullCalendarComponent = () => {
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

  const renderEventContent = (eventContent) => {
    return (
      <>
        <span>{eventContent.timeText}</span>
        <b style={{ color: 'black' }}>{eventContent.event.title}</b>
      </>
    )
  }

  const handleDateClick = (e) => {
    console.log(e)
  }

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.title)
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
    console.log(`events: ${events}`)
  }, [events])
  const handleEvents = (events) => {
    setEvents(events)
  }
  return (
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
          console.log('A new event added', e)
        }}
        eventChange={(e) => console.log('event change')}
        eventDragStart={(e) => console.log('event is started to drag')}
        eventDragStop={(e) => console.log('event is stopped to drag')}
        eventRemove={(e) => {
          console.log('event is deleted')
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
  )
}

export default FullCalendarComponent
