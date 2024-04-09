import { Telegram, X } from '@mui/icons-material';
import gat from '../assets/gat.png';
import './content.css';
import { Link } from '@mui/material';

export const Content = () => {
  return (
    <section className='content'>
      <div className='content-row main-row'>
        <img src={gat} alt='CatWifGat' className='gat' />
        <div className='row-section'>
          <p className='intro'>
            CatWifGat is a bad meowdafucka on a mission: To end the Cat meta on
            Solana once and for all. There can only be one boss on this
            blockchain, and he's got a Gat.
          </p>
          <div className='socials'>
            <Link href='https://raydium.io/swap/?outputCurrency=F5TsLYZkx5ivspQd2K7j9tQAfiQ7Y9qdxFsDkwEw5MeV'>
              <div className='link'>Buy $GAT</div>
            </Link>
            <Link className='link-icon tg' href='https://t.me/CATWIFGATSOL'>
              <Telegram
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
            <Link className='link-icon x' href='https://x.com/catwifgatdev'>
              <X
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='content-row brick-row'>
        <Link
          color='primary'
          underline='hover'
          sx={{ fontSize: '1.5em' }}
          href='https://dexscreener.com/solana/F5TsLYZkx5ivspQd2K7j9tQAfiQ7Y9qdxFsDkwEw5MeV'
        >
          <p className='ca'>F5TsLYZkx5ivspQd2K7j9tQAfiQ7Y9qdxFsDkwEw5MeV</p>
        </Link>
      </div>
    </section>
  );
};
