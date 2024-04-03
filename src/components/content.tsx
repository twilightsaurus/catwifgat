import { Telegram, X } from '@mui/icons-material';
import gat from '../assets/gat.png';
import './content.css';
import { Link } from '@mui/material';

export const Content = () => {
  return (
    <section className='content'>
      <div className='content-row'>
        <img src={gat} alt='CatWifGat' className='gat' />
        <div className='row-section'>
          <p className='intro'>
            CatWifGat is a bad mfer out to get all the other cats on solana and
            show them who's the undisputed boss on the blockchain.
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
            <Link className='link-icon x' href='https://x.com/catwifgatsolana'>
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
