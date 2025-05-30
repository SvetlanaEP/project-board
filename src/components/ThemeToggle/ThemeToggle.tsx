import styles from './ThemeToggle.module.scss';
import { useTheme } from '../../app/hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'light' ? 'темная темка' : 'светлая темка'}
    </button>
  );
};
