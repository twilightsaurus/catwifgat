import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
