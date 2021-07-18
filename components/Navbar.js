import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className='text-center bg-gray-200 p-4 text-lg underline'>
      <Link href='/'>
        <a className='mx-80'>Home</a>
      </Link>
    </nav>
  );
};

export default Navbar;
