import { useGoogleLogin } from '@react-oauth/google';
import {
  registerWithGoogle,
  loginWithGoogle,
} from '../../services/auth-service';

const GoogleLoginSignUpButton = ({ isLoginPage, openModal }) => {
  const handleSuccess = async ({ access_token }) => {
    if (isLoginPage) {
      await loginWithGoogle(access_token);
    } else {
      console.log(
        'register with google response',
        await registerWithGoogle(access_token)
      );
      // tokenをローカルストレージに入れる
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
    <button onClick={() => requestGoogle()}>
      {isLoginPage ? 'Login' : 'Register'} with Google
    </button>
  );
};

export default GoogleLoginSignUpButton;
