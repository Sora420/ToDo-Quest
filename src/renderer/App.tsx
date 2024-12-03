//Imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import './main-menu/MainMenu';
import MainMenu from './main-menu/MainMenu';

//MUI darkTheme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    /*Uses Dark Theme for entire Project*/
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainMenu />
    </ThemeProvider>
  );
}
