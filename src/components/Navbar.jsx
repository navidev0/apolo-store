import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <header className='text-gray-600 body-font pt-4'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center justify-center font-regular text-lg'>
          <Link to='/' className='mr-8 hover:text-gray-800 hover:underline'>
            Store
          </Link>
          <Link
            to='/about'
            className='mr-8 hover:text-gray-800 hover:underline'
          >
            About
          </Link>
            <CartWidget />
          <Link to='/cart' className='mr-8 hover:text-gray-800 hover:underline'>
            Cart
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
