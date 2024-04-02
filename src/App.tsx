import { Link, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import gat from './assets/gat.png';
import { Telegram, X } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='wrapper'>
        <Link className='link-icon tg' href='https://t.me/CATWIFGATSOL'>
          <Telegram sx={{ width: '80px', height: '80px' }} color='primary' />
        </Link>
        <Link className='link-icon x' href='https://x.com/catwifgatsolana'>
          <X sx={{ width: '80px', height: '80px' }} color='primary' />
        </Link>
        <Link
          className='ca'
          color='primary'
          underline='hover'
          sx={{ fontSize: '1.5em' }}
          href='https://dexscreener.com/solana/F5TsLYZkx5ivspQd2K7j9tQAfiQ7Y9qdxFsDkwEw5MeV'
        >
          F5TsLYZkx5ivspQd2K7j9tQAfiQ7Y9qdxFsDkwEw5MeV
        </Link>
        <header className='header'>
          <img src={gat} alt='gat' className='gat' />
        </header>
        <section className='content'>
          <h1>The Cat has a Gat</h1>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
