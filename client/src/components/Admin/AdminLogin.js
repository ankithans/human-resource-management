import React, { useState, useContext } from "react";
import { SignInHeader } from "../shared/SignInHeader";
import { Button } from "../shared/Button";
import { TextBox } from "../shared/TextBox";
import { AuthContext } from "../../context/Auth/AuthProvider";

export default function AdminLogin() {
  const { adminLogin, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    adminLogin({
      email: email,
      password: password,
    });
  };

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px8'>
        Loading
      </div>
    );
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px8'>
      <div className='max-w-md w-full space-y-8'>
        <SignInHeader
          link='/'
          subLabel='sign up for a new account'
          label='Admin Sign In'
        />
        <form onSubmit={onSubmit} className='mt-8 space-y-6'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <TextBox
              id='email-address'
              type='email'
              label='Email Address'
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextBox
              id='password'
              type='password'
              label='Password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type='submit' label='Sign in' svgBool={true} />
        </form>
      </div>
    </div>
  );
}
