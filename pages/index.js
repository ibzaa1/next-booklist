import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Books } from '../data/books';
import { useState } from 'react';

export default function Home() {
  const allBooks = Books;
  const adventure = Books.adventure;
  const horror = Books.horror;
  const religious = Books.religious;

  const SingleBookComponent = (props) => {
    let genre = props.genre;
    console.log(genre);

    let [book, setBook] = useState({
      name: genre.name,
      author: genre.author,
    });
    return (
      <div>
        <p>Book Name: {book.name}</p>
        <p>Book Author: {book.author}</p>
      </div>
    );
  };

  const GenreBookComponent = (props) => {
    let books = props.genre;
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
      <div className={styles.genre}>
        <button className='bg-red-200 p-2'>Hide Genre</button>
        <h1 className={styles.title}>Adventure Books</h1>
        <GenreBookComponent genre={adventure}></GenreBookComponent>
      </div>
      <div className={styles.genre}>
        <button className='bg-red-200 p-2'>Hide Genre</button>
        <h1 className={styles.title}>Horror Books</h1>
        <GenreBookComponent genre={horror}></GenreBookComponent>
      </div>
      <div className={styles.genre}>
        <button className='bg-red-200 p-2'>Hide Genre</button>
        <h1 className={styles.title}>Religious Books</h1>
        <GenreBookComponent genre={religious}></GenreBookComponent>
      </div>
    </div>
  );
}
