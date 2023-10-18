import { AppRoute, IconName, IconSize } from '../../enums';
import { useCallback, useNavigate } from '../../hooks';
import { Icon } from '../icon/icon.tsx';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = useCallback(() => {
    console.log('navigate');
    navigate(AppRoute.ROOT);
  }, []);

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <Icon iconName={IconName.TASK_LIST} size={IconSize.EXTRA_LARGE} />
        <p className="h4">Task List</p>
      </div>
    </header>
  );
};

export { Header };
