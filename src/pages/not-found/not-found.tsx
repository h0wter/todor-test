import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';
import { AppRoute } from '../../libs/enums';

const NotFound = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <p className="h2">Not Found</p>
      <NavLink className={styles.link} to={AppRoute.ROOT}>
        Go to Homepage
      </NavLink>
    </div>
  );
};

export default NotFound;
