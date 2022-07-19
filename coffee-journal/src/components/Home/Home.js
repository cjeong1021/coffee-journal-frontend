import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const coffeeList = props.coffees.map((coffee) => {
    return (
      <div class='card rounded overflow-hidden shadow-lg m-5 lg:basis-1/4'>
        <img class='w-full' src={`${coffee.image}`} alt='Coffee Image' />
        <div class='px-6 py-4'>
          <Link to={`/${coffee.id}`} element>
            <div class='font-bold text-xl mb-2'>{coffee.name}</div>
          </Link>
          <p class='text-gray-700 text-base'>{coffee.notes}</p>
        </div>
        <div class='px-6 pt-4 pb-2 flex-wrap'>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {coffee.roast}
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {coffee.brew_method}
          </span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            {coffee.origin}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='add-coffee'>
        <Link to='/add'>
          <div className='button_plus'></div>
        </Link>
        <h1>Add Coffee</h1>
      </div>
      <div className='flex flex-col items-center lg:flex-row lg:flex-wrap type="button" data-modal-toggle="defaultModal"'>
        {coffeeList}
      </div>
    </div>
  );
}
