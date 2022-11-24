import React, { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProfileFormField from '../ProfileFormField/ProfileFormField';
import styles from './ProfileForm.module.scss';

const ProfileForm = ({ profileData }) => {
  console.log('PORT', process.env.PORT);
  const {
    username,
    full_name,
    password,
    current_program,
    social: { discord, slack, linkedin },
    videos,
  } = profileData.user;
  console.log('profileData.user', profileData.user);
  const reducer = (state, action) => {
    const {
      type,
      value: { arrKey, arrItemObjId, arrItemObjKey, field, value },
    } = action;
    switch (type) {
      case 'UPDATE_VALUE':
        if (!arrKey) {
          return {
            ...state,
            [field]: value,
          };
        }
        const targetIndex = state[arrKey].findIndex(
          (item) => item.id === arrItemObjId
        );
        // replace with new object
        state[arrKey].splice(targetIndex, 1, {
          ...state[arrKey][targetIndex],
          [arrItemObjKey]: value,
        });
        return {
          ...state,
          [arrKey]: state[arrKey],
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    username,
    fullName: full_name,
    password,
    currentProgram: current_program,
    discord,
    slack,
    linkedin,
    videos: videos?.length ? videos : [],
  });
  const updateValue = ({
    field,
    arrKey,
    arrItemObjId,
    arrItemObjKey,
    value,
  }) => {
    dispatch({
      type: 'UPDATE_VALUE',
      value: { field, arrKey, arrItemObjId, arrItemObjKey, value },
    });
  };
  const addVideoField = () => {
    dispatch({
      type: 'UPDATE_VALUE',
      value: {
        field: 'videos',
        value: [...state.videos, { _id: uuidv4(), title: '', url: '' }],
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted values:', state);
    // TODO: compare with original values and send only updated fields
  };
  console.log('state', state);

  useEffect(() => {
    if (!state.videos?.length) {
      dispatch({
        type: 'UPDATE_VALUE',
        value: {
          field: 'videos',
          value: [...state.videos, { _id: uuidv4(), title: '', url: '' }],
        },
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.sectionWrap}>
        <section>
          <h3># Information</h3>
          <ProfileFormField
            id="username"
            type="text"
            labelText="Username"
            name="username"
            value={state.username}
            handleChange={updateValue}
          />
          <ProfileFormField
            id="fullName"
            type="text"
            labelText="Full Name"
            name="fullName"
            value={state.fullName}
            handleChange={updateValue}
          />
          <ProfileFormField
            id="password"
            type="password"
            labelText="Password"
            name="password"
            value={state.password}
            handleChange={updateValue}
          />
          <ProfileFormField
            id="currentProgram"
            type="text"
            labelText="Current Program"
            name="currentProgram"
            value={state.currentProgram}
            handleChange={updateValue}
          />
        </section>
        <section>
          <h3># Social</h3>
          <ProfileFormField
            id="discord"
            type="text"
            labelText="Discord"
            name="discord"
            value={state.discord}
            handleChange={updateValue}
          />
          <ProfileFormField
            id="slack"
            type="text"
            labelText="Slack"
            name="slack"
            value={state.slack}
            handleChange={updateValue}
          />
          <ProfileFormField
            id="linkedin"
            type="text"
            labelText="LinkedIn"
            name="linkedin"
            value={state.linkedin}
            handleChange={updateValue}
          />
        </section>
        <section>
          <h3># Videos</h3>
          {state.videos?.map((video) => (
            <div className={styles.videoFieldGroup} key={video._id}>
              <ProfileFormField
                id={video.title}
                type="text"
                labelText="Title"
                name={video.title}
                value={video.title}
                arrKey="videos"
                arrItemObjId={video._id}
                arrItemObjKey="title"
                handleChange={updateValue}
              />
              <ProfileFormField
                id={video.url}
                type="text"
                labelText="URL"
                name={video.url}
                value={video.url}
                arrKey="videos"
                arrItemObjId={video._id}
                arrItemObjKey="url"
                handleChange={updateValue}
              />
            </div>
          ))}
          <button onClick={addVideoField} className={styles.addVideoBtn}>
            Add Video
          </button>
        </section>
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;
