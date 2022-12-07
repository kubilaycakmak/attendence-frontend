import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { fetchProfileInfo } from '../../services/user-service';
import { SAVE_USER_DATA } from '../../store/user/userActionTypes';
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import Sidebar from '../Sidebar/Sidebar';

const ProtectedRoutes = () => {
  const [userData, setUserData] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProfileInfo().then((data) => {
      dispatch({ type: SAVE_USER_DATA, payload: data });
      setUserData(data);
      setIsReady(true);
    });
  }, []);

  return (
    <>
      {isReady &&
        (userData ? (
          <>
            <AvatarMenu
              username={userData.user.username}
              photo={userData.user.photo}
            />
            <Sidebar />
            <Outlet />
          </>
        ) : (
          <Navigate to="/login" replace={true} />
        ))}
    </>
  );
};

export default ProtectedRoutes;
