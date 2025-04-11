import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { signUp } from '../features/auth/authActions'
import LoadingSpinner from '../components/LoadingSpinner'
import Error from '../components/Error'

const Register = () => {

  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  useEffect(() => {

    // redirect user to login page if registration was successful
    if (success) navigate("/login");

  }, [navigate, success])


  // handling submit
  const submitForm = (data) => {

    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();

    dispatch(signUp(data));
    console.log("Data submitted: ", data)
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl">
    <div className="text-center">
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Create your account</h2>
      <p className="mt-2 text-sm text-gray-600">
        Or{' '}
        <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
          login to your existing account
        </a>
      </p>
    </div>

    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      {error && <Error error={error} />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstName"
            {...register("firstName")}
            type="text"
            autoComplete="given-name"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastName"
            {...register("lastName")}
            type="text"
            autoComplete="family-name"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          {...register("email")}
          type="email"
          autoComplete="email"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          {...register("password")}
          type="password"
          autoComplete="new-password"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Select Role
        </label>
        <select
          id="role"
          {...register("role")}
          defaultValue="user"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Register
        </button>
      </div>

      {loading && <LoadingSpinner />}
    </form>
  </div>
</div>

    </>
  )
}

export default Register;
