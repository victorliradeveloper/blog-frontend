import {
  StyledFormModal,
  CheckIconWrapper,
  Title,
  Text1,
  Text2,
  Button,
} from './FormModal.styled';
import Image from 'next/image';

type FormModalProps = {
  className: string;
  onCloseFormModal: () => void;
};

const FormModal = function (props: FormModalProps) {
  const { className, onCloseFormModal } = props;
  const isActive = className === 'active';

  return (
    <StyledFormModal $isActive={isActive}>
      <CheckIconWrapper>
        <Image src="./check.svg" alt="check icon" width={200} height={200} />
      </CheckIconWrapper>
      <Title>Tudo certo!</Title>
      <Text1>As suas informações foram enviadas com sucesso!</Text1>
      <Text2>Entrarei em contato em breve.</Text2>
      <Button onClick={onCloseFormModal}>ok</Button>
    </StyledFormModal>
  );
};

export default FormModal;
