import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

function ProgressCircle(props: CircularProgressProps) {
  return (
    //The Gray Part of the circle
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={(theme) => ({
          //CSS Styling
          color: theme.palette.grey[200],
          position: 'absolute',
          margin: '10px',
          marginLeft: '100px',
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[800],
          }),
        })}
        size={160}
        thickness={4}
        value={100}
      />
      {/*The Purple Part of the Circle*/}
      <CircularProgress
        variant="determinate"
        sx={(theme) => ({
          //CSS Styling
          color: '#1a90ff',
          position: 'absolute',
          margin: '10px',
          marginLeft: '100px',
          strokeLinecap: 'round',
          ...theme.applyStyles('dark', {
            color: '#832aa0',
          }),
        })}
        size={160}
        thickness={4}
        value={75}
      />
    </Box>
  );
}
export default function CustomizedProgressCircle() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ProgressCircle />
    </Stack>
  );
}
