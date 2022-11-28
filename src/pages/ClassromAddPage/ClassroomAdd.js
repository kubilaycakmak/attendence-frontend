import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Sidebar from '../../component/Sidebar/Sidebar';
import style from './ClassroomAdd.module.scss';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const ClassroomAdd = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
      <form className={style.container}>
        <div className={style.titleContainer}>
          <h1 className={style.header}>Add new room</h1>
          <button className={style.button}>Publish</button>
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
          <input type="text" className={style.input} />
        </div>
        <div className={style.roomDesc}>
          <h3 className={style.title}>Room's description</h3>
          <input type="text" className={style.roomDescInput} />
        </div>
        <div className={style.type}>
          <h3 className={style.title}>Type</h3>
          <input type="text" className={style.input} />
        </div>
        <div className={style.totalSeat}>
          <h3 className={style.title}>Total Seat</h3>
          <input type="text" className={style.input} />
        </div>
        <div className={style.roomFloor}>
          <h3 className={style.title}>Room's floor</h3>
          <input type="text" className={style.input} />
        </div>
      </form>
    </div>
  );
};

export default ClassroomAdd;
