import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Sidebar from '../../component/Sidebar/Sidebar';
import FormField from '../../component/ui/FormField/FormField';
import axios from 'axios';
import style from './ClassroomAdd.module.scss';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const ClassroomAdd = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [totalSeat, setTotalSeat] = useState('');
  const [floor, setFloor] = useState('');

  const handleChange = (file) => {
    setFile(file);
  };
  const updateValue = ({ value }) => {
    setTitle(value);
  };
  const postRoom = async (e) => {
    const requestBody = {
      name: title,
      type: type,
      floor: floor,
      description: desc,
      picture_url: file,
      total_seats: totalSeat,
    };

    console.log(requestBody);
    e.preventDefault(e);

    await axios
      .post(
        `https://attendance-backend-dev.herokuapp.com/api/rooms`,
        requestBody,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5Y2FAdGVzdC5jb20iLCJ1c2VySWQiOiI2MzYwNDFkZWRkZmEwOWU3NGZlZTQyMjkiLCJpYXQiOjE2NjcyNTMwMjAsImV4cCI6MTY4NDUzMzAyMH0.sT3AWJn_ksza4veEPKqwdMFmVbfcDRZABqjFwsjfdXw',
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          // navigate client to confirm
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={style.header}>Add new room</h1>
          <button className={style.button} onClick={postRoom}>
            Publish
          </button>
        </div>
        <div className={style.fileUploader}>
          <h3 className={style.title}>Room Image</h3>
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>
        <div className={style.roomTitle}>
          <h3 className={style.title}>Room's title</h3>
          <div>{title}</div>
          <FormField value={title} handleChange={updateValue} />
        </div>
        <div className={style.roomDesc}>
          <h3 className={style.title}>Room's description</h3>
          <FormField value={desc} handleChange={setDesc} />
        </div>
        <div className={style.type}>
          <h3 className={style.title}>Type</h3>
          <FormField value={type} handleChange={setType} />
        </div>
        <div className={style.totalSeat}>
          <h3 className={style.title}>Total Seat</h3>
          <FormField value={totalSeat} handleChange={setTotalSeat} />
        </div>
        <div className={style.roomFloor}>
          <h3 className={style.title}>Room's floor</h3>
          <FormField value={floor} handleChange={setFloor} />
        </div>
      </form>
    </div>
  );
};

export default ClassroomAdd;
