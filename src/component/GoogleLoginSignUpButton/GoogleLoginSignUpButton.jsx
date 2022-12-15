import { useContext } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import StyledGoogleButton from 'react-google-button';
import './GoogleLoginSignUpButton.scss';
import {
  registerWithGoogle,
  loginWithGoogle,
} from '../../services/authService';
import localStorageHelper from '../../helpers/localStorageHelper';
import { AlertContext } from '../../contexts/AlertContext';

const GoogleLoginSignUpButton = ({ isLoginPage, openModal }) => {
  const navigate = useNavigate();
  const { setAlert } = useContext(AlertContext);

  const handleSuccess = async ({ access_token }) => {
    if (isLoginPage) {
      const {
        data: { message, token },
        resultType,
      } = await loginWithGoogle(access_token);

      if (resultType === 'error') {
        setAlert({ message, type: resultType });
        return;
      }
      localStorageHelper('set', 'token', token);
      setAlert({});
      navigate('/profile');
    } else {
      const {
        data: { token, message },
        resultType,
      } = await registerWithGoogle(access_token);
      if (resultType === 'error') {
        setAlert({ message, type: resultType });
        return;
      }
      localStorageHelper('set', 'token', token);
      openModal();
    }
  };
  const requestGoogle = useGoogleLogin({
    onSuccess: handleSuccess,
    flow: 'implicit',
    scope:
      'email profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
  });
  return (
    <div className="styledGoogle">
      <StyledGoogleButton
        onClick={() => requestGoogle()}
        label={`${isLoginPage ? 'Login' : 'Register'} with Google`}
      />
    </div>
  );
};

export default GoogleLoginSignUpButton;
