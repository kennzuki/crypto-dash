import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='p-8 flex justify-between gap-4 place-items-center'>
      <h1 className='text-3xl font-bold'>Crypto Dash</h1>
      <section className='flex gap-4 uppercase font-bold text-blue-950'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </section>
    </div>
  );
};

export default Header;
