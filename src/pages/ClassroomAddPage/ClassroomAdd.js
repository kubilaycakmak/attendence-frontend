import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import FormField from '../../component/ui/FormField/FormField';
import axios from 'axios';
import style from './ClassroomAdd.module.scss';
import { useNavigate } from 'react-router-dom';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const ClassroomAdd = () => {
  const [page, setPage] = useState(0);
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [roomType, setRoomType] = useState('');
  const [totalSeat, setTotalSeat] = useState('');
  const [floor, setFloor] = useState('');
  const [roomId, setRoomId] = useState(null);
  const navigate = useNavigate();
  const handleChange = (file) => {
    console.log(file);
    postPhoto(roomId, file);
  };

  const postPhoto = async (id, file1) => {
    let bodyFormData = new FormData();
    bodyFormData.append('photo', file1);
    await axios
      .post(
        `https://aged-dust-8037.fly.dev/api/rooms/${id}/update-photo`,
        bodyFormData,
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          // navigate to
          navigate('/profile');
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const updateValue = ({ field, value }) => {
    console.log(field);
    if (field === 'title') {
      setTitle(value);
    } else if (field === 'description') {
      setDesc(value);
    } else if (field === 'roomType') {
      setRoomType(value);
    } else if (field === 'totalSeat') {
      setTotalSeat(parseInt(value));
    } else if (field === 'roomFloor') {
      setFloor(parseInt(value));
    }
  };
  const postRoom = async (e) => {
    const requestBody = {
      name: title,
      type: roomType,
      floor: floor,
      description: desc,
      picture_url: file,
      total_seats: totalSeat,
    };
    console.log(file);
    console.log(requestBody);
    e.preventDefault(e);

    await axios
      .post(`https://aged-dust-8037.fly.dev/api/rooms`, requestBody, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5Y2FAdGVzdC5jb20iLCJ1c2VySWQiOiI2MzYwNDFkZWRkZmEwOWU3NGZlZTQyMjkiLCJpYXQiOjE2Njk3Njc2NDQsImV4cCI6MTY4NzA0NzY0NH0.Jy9giZEEs-dfrPM_N5zOsAkUFof3qvh4M2aqyptArUI',
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log(res.data.room._id);
          setRoomId(res.data.room._id);
          setPage(1);
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

          {page === 0 ? (
            <button className={style.button} onClick={postRoom}>
              Next
            </button>
          ) : (
            <button
              className={style.button}
              onClick={() => navigate('/profile')}
            >
              Home
            </button>
          )}
        </div>
        {page === 1 ? (
          <div className={style.fileUploader}>
            <h1 className={style.pageTitle}>
              Second Page - You will direct to profile page after uploading an
              image.
            </h1>
            <h3 className={style.title}>Room Image</h3>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </div>
        ) : (
          <>
            <div className={style.roomTitle}>
              <h1 className={style.pageTitle}>First Page</h1>
              <h3 className={style.title}>Room's title</h3>
              <FormField
                id="title"
                type="text"
                value={title}
                handleChange={updateValue}
              />
            </div>
            <div className={style.roomDesc}>
              <h3 className={style.title}>Room's description</h3>
              <FormField
                id="description"
                type="text"
                value={desc}
                handleChange={updateValue}
              />
            </div>
            <div className={style.type}>
              <h3 className={style.title}>Type</h3>
              <FormField
                id="roomType"
                type="text"
                value={roomType}
                handleChange={updateValue}
              />
            </div>
            <div className={style.totalSeat}>
              <h3 className={style.title}>Total Seat</h3>
              <FormField
                type="number"
                value={totalSeat}
                handleChange={updateValue}
                id="totalSeat"
              />
            </div>
            <div className={style.roomFloor}>
              <h3 className={style.title}>Room's floor</h3>
              <FormField
                type="number"
                value={floor}
                handleChange={updateValue}
                id="roomFloor"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ClassroomAdd;
