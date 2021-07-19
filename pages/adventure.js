import { Books } from '../data/books';
import { GenreBookComponent } from '../components/GenreBookComponent';
import Link from 'next/link';

const AdventurePage = () => {
  let adventure = Books.adventure;
  return (
    <div className='border-gray-400 border-4 w-2/6 p-2 m-auto my-48'>
      <div className='flex justify-center underline text-2xl'>
        Adventure Books
      </div>
      <div className='flex justify-center items-center text-center'>
        <GenreBookComponent genre={adventure} />
      </div>
      <Link href='/'>
        <a className='bg-blue-300 p-2 text-center hover:bg-blue-200'>
          Go To Home Page
        </a>
      </Link>
    </div>
  );
};

export default AdventurePage;
