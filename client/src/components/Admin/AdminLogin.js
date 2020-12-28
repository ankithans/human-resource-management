import React, { useEffect, useContext } from "react";
import { SignInHeader } from "../shared/SignInHeader";
import { Button } from "../shared/Button";
import { TextBox } from "../shared/TextBox";
import { AuthContext } from "../../context/Auth/AuthProvider";

export default function AdminLogin() {
  const { adminLogin } = useContext(AuthContext);

  useEffect(() => {
    adminLogin({
      email: "admin@admin.com",
      password: "admin@123",
    });
  }, []);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px8'>
      <div className='max-w-md w-full space-y-8'>
        <SignInHeader
          link='/'
          subLabel='sign up for a new account'
          label='Admin Sign In'
        />
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <TextBox
              id='email-address'
              type='email'
              label='Email Address'
              autoComplete='email'
            />
            <TextBox
              id='password'
              type='password'
              label='Password'
              autoComplete='current-password'
            />
          </div>
          <Button type='submit' label='Sign in' svgBool={true} />
        </form>
      </div>
    </div>
  );
}
