import { Navigate, Outlet } from 'react-router-dom';
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import Sidebar from '../Sidebar/Sidebar';

const ProtectedRoutes = ({ user }) => {
  return (
    <>
      {user ? (
        <>
          <AvatarMenu />
          <Sidebar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default ProtectedRoutes;
