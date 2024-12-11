import { Typography, Box } from '@mui/material';
import styles from './MainMenuStyle';
import ProgressCircle from './../components/ProgressCircle';
import ProgressLine from './../components/ProgressLine';

const currentToDo = 'Homework📚';

export default function MainMenu() {
  return (
    <div>
      {/*Header*/}
      <Typography variant="h2" sx={styles.heading}>
        Hello User👋
      </Typography>

      {/*Container for ToDo Progress*/}
      <Box sx={styles.flexRow}>
        <ProgressCircle /> {/*Circular Indicator for un-/finished ToDos*/}
        <Box sx={styles.baselineGroup}>
          <Typography variant="h2" sx={styles.progressPercentage}>
            75% Done
          </Typography>
          <Typography variant="h4" sx={styles.currentToDo}>
            Current ToDo: {currentToDo}
          </Typography>
        </Box>
        <ProgressLine />
      </Box>
    </div>
  );
}
