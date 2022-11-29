import React, { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { updateProfileInfo } from '../../services/user-service';
import FormField from '../ui/FormField/FormField';
import styles from './ProfileForm.module.scss';

const ProfileForm = ({ profileData }) => {
  const { videos } = profileData;
  const {
    full_name,
    password,
    current_program,
    social: { discord, slack, linkedin },
  } = profileData.user;
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
          (item) => item._id === arrItemObjId
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
    full_name,
    password,
    current_program,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: compare with original values and send only updated fields
    const dataToCompareWith = {
      ...profileData.user,
      ...profileData.user.social,
      ...profileData.videos,
    };
    console.log('dataToCompareWith', dataToCompareWith);
    // send only fields that are updated by user
    const updatedFields = { social: {} };
    Object.keys(state).forEach((key) => {
      if (state[key] !== dataToCompareWith[key]) {
        if (['slack', 'discord', 'linkedin'].includes(key)) {
          updatedFields.social[key] = state[key];
          return;
        }
        updatedFields[key] = dataToCompareWith[key];
      }
    });

    await updateProfileInfo(updatedFields);
  };

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
          <FormField
            id="full_name"
            type="text"
            labelText="Full Name"
            name="full_name"
            value={state.full_name}
            handleChange={updateValue}
          />
          <FormField
            id="password"
            type="password"
            labelText="Password"
            name="password"
            value={state.password}
            handleChange={updateValue}
          />
          <FormField
            id="current_program"
            type="text"
            labelText="Current Program"
            name="current_program"
            value={state.current_program}
            handleChange={updateValue}
          />
        </section>
        <section>
          <h3># Social</h3>
          <FormField
            id="discord"
            type="text"
            labelText="Discord"
            name="discord"
            value={state.discord}
            handleChange={updateValue}
          />
          <FormField
            id="slack"
            type="text"
            labelText="Slack"
            name="slack"
            value={state.slack}
            handleChange={updateValue}
          />
          <FormField
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
          {state.videos?.map((video, index) => (
            <div className={styles.videoFieldGroup} key={video._id}>
              <FormField
                id={video.title}
                type="text"
                labelText={`Title ${index + 1}`}
                name={video.title}
                value={video.title}
                arrKey="videos"
                arrItemObjId={video._id}
                arrItemObjKey="title"
                handleChange={updateValue}
              />
              <FormField
                id={video.url}
                type="text"
                labelText={`URL ${index + 1}`}
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
