export default function Signup(props) {
  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Sign up</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='fullname'
            placeholder='Full Name'
            onChange={props.handleSignup}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='email'
            placeholder='Email'
            onChange={props.handleSignup}
          />

          <input
            type='password'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='password'
            placeholder='Password'
            onChange={props.handleSignup}
          />
          <input
            type='password'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='confirm_password'
            placeholder='Confirm Password'
            onChange={props.handleSignup}
          />

          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
          >
            Create Account
          </button>
        </div>

        <div class='text-grey-dark mt-6'>
          Already have an account?
          <a
            class='no-underline border-b border-blue text-blue'
            href='../login/'
          >
            <span> </span>Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
