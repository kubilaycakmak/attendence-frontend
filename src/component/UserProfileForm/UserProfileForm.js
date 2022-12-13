import React, { useEffect, useReducer, useContext, useState } from 'react';
import { AlertContext } from '../../contexts/AlertContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { v4 as uuidv4 } from 'uuid';
import { updateProfileInfo } from '../../services/user-service';
import FormField from '../ui/FormField/FormField';
import checkEquality from '../../utils/checkEquality';
import styles from './UserProfileForm.module.scss';
import PrimaryBtn from '../ui/Modal/Btn/PrimaryBtn';
import SecondaryBtn from '../ui/Modal/Btn/SecondaryBtn';

const UserProfileForm = ({ profileData }) => {
  const [dataToCompareWith, setDataToCompareWith] = useState(profileData);
  const { setIsLoadingShown } = useContext(LoadingContext);
  const { setAlert } = useContext(AlertContext);
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
        const arrCopy = [...state[arrKey]];
        arrCopy.splice(targetIndex, 1, {
          ...state[arrKey][targetIndex],
          [arrItemObjKey]: value,
        });
        return {
          ...state,
          [arrKey]: arrCopy,
        };
    }
  };
  useEffect(() => {
    setDataToCompareWith({
      ...profileData.user,
      ...profileData.user.social,
      videos: profileData.videos,
    });
  }, []);

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
    const updatedFieldsKeys = Object.keys(state).filter((key) => {
      if (key === 'videos') {
        const filtered = state.videos.filter(
          (video) => video.title !== '' && video.url !== ''
        );
        return !checkEquality(filtered, dataToCompareWith.videos);
      }
      return !checkEquality(state[key], dataToCompareWith[key]);
    });
    let reqBody = {};
    updatedFieldsKeys.forEach((fieldKey) => {
      if (['slack', 'discord', 'linkedin'].includes(fieldKey)) {
        if (!('social' in reqBody)) {
          reqBody = {
            ...reqBody,
            social: {},
          };
        }
        reqBody.social[fieldKey] = state[fieldKey];
        return;
      }
      reqBody[fieldKey] = state[fieldKey];
    });

    if (!updatedFieldsKeys.length) {
      setAlert({
        message:
          'None of the field values have been changed since last update.',
        type: 'error',
      });
      return;
    }

    setIsLoadingShown(true);
    await updateProfileInfo(reqBody);
    setDataToCompareWith((prev) => ({
      ...prev,
      ...state,
    }));
    setAlert({});
    setIsLoadingShown(false);
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
          {/* <button onClick={addVideoField} className={styles.addVideoBtn}>
            Add Video
          </button> */}
        </section>
      </div>
      {/* <button type="submit">Update</button> */}
      <div className={styles.btnWrap}>
        <PrimaryBtn onClick={addVideoField} className={styles.addVideoBtn}>
          Add Video
        </PrimaryBtn>
        <SecondaryBtn type="submit">Update</SecondaryBtn>
      </div>
    </form>
  );
};

export default UserProfileForm;
