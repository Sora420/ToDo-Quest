//Imports
import { CircularProgress, Typography } from '@mui/material';
import styles from './MainMenuStyle';
import ProgressCircle from './../components/ProgressCircle';

export default function MainMenu() {
  return (
    <div>
      <Typography variant="h3" sx={styles.heading}>
        Hello User👋
      </Typography>

      <ProgressCircle></ProgressCircle>
    </div>
  );
}
