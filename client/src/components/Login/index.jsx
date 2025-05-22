import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className='max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-20'>
      <h2 className='text-2xl font-bold text-gray-700 mb-2 text-center'>
        Log In to Your Account
      </h2>
      <p className='text-gray-600 mb-6 text-center'>
        Enter your credentials to access your account
      </p>

      <form className='space-y-4'>
        <div>
          <label className='block text-gray-700 font-medium mb-1'>Email</label>
          <input
            type='email'
            name='email'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Password
          </label>
          <input
            type='password'
            name='password'
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500'
          />
        </div>

        <div className='flex items-center justify-between'>
          <label className='flex items-center text-sm text-gray-600'>
            <input type='checkbox' className='mr-2' />
            Remember me
          </label>
          <a href='#password' className='text-sm text-green-700 hover:underline'>
            Forgot password?
          </a>
        </div>

        <button
          type='submit'
          className='w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300 cursor-pointer'
        >
          Log In
        </button>
           <Link to='/register' className='text-sm text-green-700 hover:underline'>
            Don't have an account?
          </Link>
      </form>
    </main>
  )
}
