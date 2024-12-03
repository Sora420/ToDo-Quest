//Imports
import { Typography } from '@mui/material';
import styles from './MainMenuStyle';
import ProgressCircle from './../components/ProgressCircle';

export default function MainMenu() {
  return (
    <div>
      <Typography variant="h2" sx={styles.heading}>
        Hello User👋
      </Typography>

      <ProgressCircle></ProgressCircle>
    </div>
  );
}
