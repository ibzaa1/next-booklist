import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Books } from '../data/books';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1);
  };
  const handleShow2 = () => {
    setShow2(!show2);
  };
  const handleShow3 = () => {
    setShow3(!show3);
  };
  const allBooks = Books;
  const adventure = Books.adventure;
  const horror = Books.horror;
  const religious = Books.religious;

  const SingleBookComponent = (props) => {
    const genre = props.genre;

    const [book, setBook] = useState({
      name: genre.name,
      author: genre.author,
      type: ['papreback ', 'hard cover', ' pdf'],
    });
    return (
      <div>
        <div className='my-6'>
          <p>Book Name: {book.name}</p>
          <p> - Book Author: {book.author} - </p>
          <p>Book Type: {book.type}</p>
        </div>
      </div>
    );
  };

  const GenreBookComponent = (props) => {
    const books = props.genre;
    return (
      <div>
        {books.map((book) => {
          return <SingleBookComponent genre={book}></SingleBookComponent>;
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <button
        className='bg-red-200 p-2 my-2'
        onClick={() => setShow1(handleShow1)}
      >
        Hide Genre
      </button>
      {show1 && (
        <div className={styles.genre}>
          <h1 className={styles.title}>Adventure Books</h1>
          <GenreBookComponent genre={adventure}></GenreBookComponent>
          <Link href='/horror'>
            <a className='bg-blue-200 p-2'>View Only Adventure Books </a>
          </Link>
        </div>
      )}

      {show2 && (
        <div className={styles.genre}>
          <h1 className={styles.title}>Horror Books</h1>
          <GenreBookComponent genre={horror}></GenreBookComponent>
          <Link href='/adventure'>
            <a className='bg-blue-200 p-2'>View Only Horror Books</a>
          </Link>
        </div>
      )}
      <button className='bg-red-200 p-2 my-2' onClick={handleShow2}>
        Hide Genre
      </button>

      {show3 && (
        <div className={styles.genre}>
          <h1 className={styles.title}>Religious Books</h1>
          <GenreBookComponent genre={religious}></GenreBookComponent>
          <Link href='/religious'>
            <a className='bg-blue-200 p-2'>View Only Religious Books</a>
          </Link>
        </div>
      )}
      <button className='bg-red-200 p-2 my-2' onClick={handleShow3}>
        Hide Genre
      </button>
    </div>
  );
}
