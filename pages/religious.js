import { Books } from '../data/books';
import { GenreBookComponent } from '../components/GenreBookComponent';

const religiousPage = () => {
  let religious = Books.religious;
  console.log(religious);
  return (
    <div>
      <div>religious Page</div>
      <GenreBookComponent genre={religious} />
    </div>
  );
};

export default religiousPage;
