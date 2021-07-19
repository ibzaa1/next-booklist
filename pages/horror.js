import { Books } from '../data/books';
import { GenreBookComponent } from '../components/GenreBookComponent';

const horrorPage = () => {
  let horror = Books.horror;
  console.log(horror);
  return (
    <div>
      <div>Horror Page</div>
      <GenreBookComponent genre={horror} />
    </div>
  );
};

export default horrorPage;
