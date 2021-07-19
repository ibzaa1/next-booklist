import { Books } from '../data/books';
import { GenreBookComponent } from '../components/GenreBookComponent';

const AdventurePage = () => {
  let adventure = Books.adventure;
  console.log(adventure);
  return (
    <div>
      <div>Adventure Page</div>
      <GenreBookComponent genre={adventure} />
    </div>
  );
};

export default AdventurePage;
