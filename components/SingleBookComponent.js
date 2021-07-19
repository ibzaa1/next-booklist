import { useState } from 'react';

export const SingleBookComponent = (props) => {
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
        <p>Book Price: {book.price}</p>
      </div>
    </div>
  );
};
