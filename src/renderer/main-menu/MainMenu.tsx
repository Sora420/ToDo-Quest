//Imports
import { Typography } from '@mui/joy';
import './MainMenu.css';
import styles from './MainMenuStyle';

export default function MainMenu() {
  return (
    <div>
      <Typography level="h1" sx={styles.heading}>
        Hello User 👋
      </Typography>
    </div>
  );
}
