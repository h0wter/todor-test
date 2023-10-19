import { type IconName } from '../../enums';
import { getValidClassNames } from '../../helpers';
import { type ValueOf } from '../../types';
import { Icon } from '../icon/icon.tsx';
import styles from './styles.module.scss';

type Properties = {
  className?: Parameters<typeof getValidClassNames>[0];
  label?: string | number;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md';
  variant?: 'outlined' | 'text';
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isUppercase?: boolean;
  frontIcon?: ValueOf<typeof IconName>;
  backIcon?: ValueOf<typeof IconName>;
  onClick?: (() => void) | ((event_: React.MouseEvent) => void);
};

const Button: React.FC<Properties> = ({
  className,
  type = 'button',
  size = 'md',
  variant = 'outlined',
  label = '',
  isDisabled = false,
  isFullWidth = false,
  isUppercase = false,
  frontIcon,
  backIcon,
  onClick,
}: Properties) => {
  return (
    <button
      className={getValidClassNames(
        isUppercase && 'uppercase',
        styles.btn,
        styles[size],
        styles[variant],
        isFullWidth && styles.fullWidth,
        className,
      )}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {frontIcon && <Icon iconName={frontIcon} />}
      {label}
      {backIcon && <Icon iconName={backIcon} />}
    </button>
  );
};

export { Button };
