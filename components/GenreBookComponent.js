import { SingleBookComponent } from './SingleBookComponent';

export const GenreBookComponent = (props) => {
  const books = props.genre;
  return (
    <div>
      {books.map((book) => {
        return <SingleBookComponent genre={book}></SingleBookComponent>;
      })}
    </div>
  );
};
