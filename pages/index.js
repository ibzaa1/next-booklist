import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Books } from '../data/books';
import { useState } from 'react';
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
  const horror = Books.horror;
  const religious = Books.religious;

  return (
    <div className={styles.container}>
      <div className={styles.genre}>
        <button
          className='bg-red-200 p-2 my-2'
          onClick={() => setShowAdventure(handleShowAdventure)}
        >
          {showAdventure ? 'Hide Adventure Books' : 'Show Adventure Books'}
        </button>
        {showAdventure && (
          <>
            <h1>Adventure</h1>
            <GenreBookComponent genre={adventure} />
            <Link href='/adventure'>
              <a className='bg-blue-200 p-2'>View Only Adventure Books </a>
            </Link>
          </>
        )}
      </div>

      <div className={styles.genre}>
        <button
          className='bg-red-200 p-2 my-2'
          onClick={() => setShowHorror(handleShowHorror)}
        >
          {showHorror ? 'Hide Horror Books' : 'Show Horror Books'}
        </button>
        {showHorror && (
          <>
            <h1>Horror</h1>
            <GenreBookComponent genre={horror} />
            <Link href='/horror'>
              <a className='bg-blue-200 p-2'>View Only Horror Books</a>
            </Link>
          </>
        )}
      </div>

      <div className={styles.genre}>
        <button
          className='bg-red-200 p-2 my-2'
          onClick={() => setShowReligious(handleShowReligious)}
        >
          {showReligious ? 'Hide Religious Books' : 'Show Religious Books'}
        </button>
        {showReligious && (
          <>
            <h1>Religious</h1>
            <GenreBookComponent genre={religious} />
            <Link href='/religious'>
              <a className='bg-blue-200 p-2'>View Only Religious Books</a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
