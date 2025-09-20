import { StyledLoginAlertModal } from './LoginAlertModal.styled';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import router from 'next/router';
import { useCurrentUser } from '@/Context/currentUser';
import { CLOSE_MODAL_ICON } from '@/constants/images';
import Image from 'next/image';

type IProps = {
  onCloseLoginAlertModal: () => void;
};

const LoginAlertModal = function (props: IProps) {
  const { callSetCurrentUser } = useCurrentUser();

  return (
    <StyledLoginAlertModal>
      <Image
        onClick={props.onCloseLoginAlertModal}
        className="close-modal"
        src={CLOSE_MODAL_ICON}
        alt="fechar modal icone"
        width={30}
        height={30}
      />
      <h1 className="txt-1">Sign in</h1>
      <h1 className="txt-2">To view your favorite posts</h1>

      <GoogleLogin
        onError={() => console.log('Login failed')}
        theme="filled_blue"
        size="medium"
        shape="pill"
        type="icon"
        width="100"
        text="signin"
        locale="en"
        onSuccess={credentialResponse => {
          try {
            if (credentialResponse?.credential) {
              const user = jwtDecode<{ picture: string; name: string; email: string }>(
                credentialResponse.credential,
              );

              const { picture, name, email } = user;

              callSetCurrentUser({
                name,
                picture,
                email,
              });

              router.push('/profile');
            } else {
              console.log('No credential received');
            }
          } catch (error) {
            console.error('Error decoding JWT or handling Google login:', error);
          }
        }}
      />
    </StyledLoginAlertModal>
  );
};

export default LoginAlertModal;
