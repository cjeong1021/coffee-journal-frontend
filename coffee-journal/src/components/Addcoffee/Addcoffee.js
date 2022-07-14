export default function Addcoffee(props) {
  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Sign up</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='name'
            placeholder='Name'
            onChange={props.handleCoffees}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='roast'
            placeholder='Roast'
            onChange={props.handleCoffees}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='origin'
            placeholder='Origin'
            onChange={props.handleCoffees}
          />
          <textarea
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4 h-40 text-justify'
            name='notes'
            placeholder='Notes'
            onChange={props.handleCoffees}
          />

          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
          >
            Add Coffee
          </button>
        </div>
      </div>
    </div>
  );
}
