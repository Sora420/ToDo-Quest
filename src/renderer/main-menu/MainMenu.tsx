//Imports
import { CircularProgress, Typography } from '@mui/material';
import styles from './MainMenuStyle';

export default function MainMenu() {
  return (
    <div>
      <Typography variant="h3" sx={styles.heading}>
        Hello User👋
      </Typography>

      <CircularProgress
        sx={{
          '--CircularProgress-size': '180px',
          '--CircularProgress-trackThickness': '20px',
          '--CircularProgress-progressThickness': '20px',
        }}
      />
    </div>
  );
}
