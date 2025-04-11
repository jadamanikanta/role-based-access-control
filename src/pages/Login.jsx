import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authActions'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'


const Login = () => {

  const navigate = useNavigate();

  const { loading, userInfo, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  useEffect(() => {

    // redirect user to login page if registration was successful
    if (userInfo) navigate("/profile");

  }, [navigate, userInfo])


  // handling submit
  const submitForm = (data) => {

    dispatch(login(data));
    console.log("Data submitted: ", data)
  };

  return (
    <>
  <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
    <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
      <div className="text-center">
        
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
        <p className="text-sm text-gray-500 mt-2">Sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className="mt-8 space-y-5">
        {error && <Error error={error} />}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            {...register("password")}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div />
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition duration-200 shadow-md"
        >
          Sign In
        </button>

        {loading && <LoadingSpinner />}
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Not a member?{" "}
        <a href="/sign-up" className="text-indigo-600 hover:text-indigo-500 font-medium">
          Register Now!
        </a>
      </p>
    </div>
  </div>
</>

  )
}

export default Login