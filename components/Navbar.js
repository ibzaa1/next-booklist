import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='text-center bg-gray-200 p-4 text-lg underline'>
      <Link href='/'>
        <a className='mx-80'>Home</a>
      </Link>
      <select name='books'>
        <option value='#'>Pick your genre</option>
        <Link href='/horror'>
          <option value='Horror'>Horror</option>
        </Link>
        <option value='Fantasy'>Fantasy</option>
        <option value='Adventure'>Adventure</option>
        <option value='Comedy'>Comedy</option>
      </select>
    </div>
  );
};

export default Navbar;
