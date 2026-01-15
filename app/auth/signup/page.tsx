"use client"
import { useActionState } from "react";
import { signup } from "../../actions/auth";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)

  return (
      <form
    // action={signup}
    action={action}
    className="mt-18 max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-md space-y-8"
  >
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-1 font-medium text-xl text-primary100">
        Name
      </label>
      <input
        id="name"
        name="name"
        placeholder="Name"
        className="px-4 py-3 text-xl border border-primary100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-primary100 "
      />
    {state?.errors?.name && <p className="text-red-600">{state.errors.name}</p>}
    </div>


    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 font-medium text-xl text-primary100">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className="px-4 py-3 text-xl border border-primary100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-primary100 "
      />
    {state?.errors?.email && <p className="text-red-600">{state.errors.email}</p>}
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="mb-1 font-medium text-xl text-primary100">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        className="px-4 py-3 text-xl border border-primary100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-primary100 "
      />
     {state?.errors?.password && (
        <div className="text-red-600">
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <button
      disabled={pending}
      type="submit"
      className="w-full text-white text-xl py-2.5 px-4 rounded-md hoverbg-blue-600 transition-colors bg-primary100 hover:bg-primary200 cursor-pointer"
    >
      Sign Up
    </button>
  </form>
  );
}


