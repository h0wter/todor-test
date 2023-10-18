import { createPortal } from 'react-dom';

import { useModal } from './libs/hooks';
import { getValidClassNames } from '../../helpers';

import styles from './styles.module.scss';

type Properties = {
  isCentered: boolean;
  onClose: () => void;
  children: React.ReactNode;
  dialogContentClassName?: string;
  dialogClassName?: string;
};

const Modal: React.FC<Properties> = ({
  isCentered,
  onClose,
  dialogContentClassName,
  dialogClassName,
  children,
}: Properties) => {
  const {
    handleDisableContentContainerClick,
    handleOutsideClick,
    handleExitKeydown,
  } = useModal({
    onClose,
  });

  const modalElement = (
    <dialog
      className={getValidClassNames(
        styles.modal,
        isCentered && styles.centered,
        dialogClassName,
      )}
      onClick={handleOutsideClick}
      onKeyDown={handleExitKeydown}
    >
      <div
        className={getValidClassNames(styles.content, dialogContentClassName)}
        onClick={handleDisableContentContainerClick}
        onKeyDown={handleExitKeydown}
      >
        {children}
      </div>
    </dialog>
  );

  return createPortal(
    modalElement,
    document.querySelector('#modal-root') as Element,
  );
};

export { Modal };
