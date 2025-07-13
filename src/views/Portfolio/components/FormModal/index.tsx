import StyledFormModal from './FormModal.styled';
import Image from 'next/image';

type FormModalProps = {
  className: string;
  onCloseFormModal: () => void;
};

const FormModal = function (props: FormModalProps) {
  const { className, onCloseFormModal } = props;

  return (
    <StyledFormModal className={className}>
      <Image className="check-icon" src="./check.svg" alt="check icon" width={200} height={200} />
      <h1>Tudo certo!</h1>
      <p className="text-1">As suas informações foram enviadas com sucesso!</p>
      <p className="text-2">Entrarei em contato em breve.</p>
      <button onClick={onCloseFormModal}>ok</button>
    </StyledFormModal>
  );
};

export default FormModal;
