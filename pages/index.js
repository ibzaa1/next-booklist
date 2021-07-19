import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Books } from '../data/books';
import { useState, Fragment } from 'react';
import Link from 'next/link';
import { GenreBookComponent } from '../components/GenreBookComponent';

export default function Home() {
  const [showAdventure, setShowAdventure] = useState(false);
  const [showHorror, setShowHorror] = useState(false);
  const [showReligious, setShowReligious] = useState(false);

  const handleShowAdventure = () => {
    setShowAdventure(!showAdventure);
  };
  const handleShowHorror = () => {
    setShowHorror(!showHorror);
  };
  const handleShowReligious = () => {
    setShowReligious(!showReligious);
  };
  const allBooks = Books;
  const adventure = Books.adventure;
  const adventurePrices = adventure.map((book) => book.prices);
  const horror = Books.horror;
  const horrorPrices = horror.map((book) => book.prices);
  const religious = Books.religious;
  const religiousPrices = religious.map((book) => book.prices);

  return (
    <div className={styles.container}>
      <div className={styles.genre}>
        <button
          className='bg-red-300 p-2 my-2 hover:bg-red-200'
          onClick={() => setShowAdventure(handleShowAdventure)}
        >
          {showAdventure ? 'Hide Adventure Books' : 'Show Adventure Books'}
        </button>
        {showAdventure && (
          <Fragment key={Books.id}>
            <h1 className='text-2xl'>Adventure Books</h1>
            <GenreBookComponent genre={adventure} />
            <Link href='/adventure'>
              <a className='bg-blue-300 p-2 hover:bg-blue-200'>
                View Only Adventure Books{' '}
              </a>
            </Link>
          </Fragment>
        )}
      </div>

      <div className={styles.genre}>
        <button
          className='bg-red-300 p-2 my-2 hover:bg-red-200'
          onClick={() => setShowHorror(handleShowHorror)}
        >
          {showHorror ? 'Hide Horror Books' : 'Show Horror Books'}
        </button>
        {showHorror && (
          <Fragment key={Books.id}>
            <h1 className='text-2xl'>Horror Books</h1>
            <GenreBookComponent genre={horror} />
            <Link href='/horror'>
              <a className='bg-blue-300 p-2 hover:bg-blue-200'>
                View Only Horror Books
              </a>
            </Link>
          </Fragment>
        )}
      </div>

      <div className={styles.genre}>
        <button
          className='bg-red-300 p-2 my-2 hover:bg-red-200'
          onClick={() => setShowReligious(handleShowReligious)}
        >
          {showReligious ? 'Hide Religious Books' : 'Show Religious Books'}
        </button>
        {showReligious && (
          <Fragment key={Books.id}>
            <h1 className='text-2xl'>Religious Books</h1>
            <GenreBookComponent genre={religious} />
            <Link href='/religious'>
              <a className='bg-blue-300 p-2 hover:bg-blue-200'>
                View Only Religious Books
              </a>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
}
