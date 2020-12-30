import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../context/Admin/AdminProvider";

export const AddEmployee = () => {
  const { loading, addEmployee } = useContext(AdminContext);
  const [name, setName] = useState("a");
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("123456");
  const [role, setRole] = useState("senoir");
  const [team, setTeam] = useState("1");
  const [salary, setSalary] = useState("8989");

  const onSubmit = () => {
    addEmployee({
      name: name,
      email: email,
      password: password,
      role: role,
      team: team,
      salary: salary,
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className='px-5 py-12  bg-gray-100  bg-opacity-50 h-screen'
      action='/admin'
    >
      <div className='mx-auto pb-10 container max-w-2xl md:w-3/4 shadow-md'>
        <div className='bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t'>
          <div className='max-w-sm mx-auto md:w-full md:mx-0'>
            <div className='inline-flex items-center space-x-4'>
              <img
                className='w-10 h-10 object-cover rounded-full'
                alt='User avatar'
                src='https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4'
              />

              <h1 className='text-gray-600'>Add Employee</h1>
            </div>
          </div>
        </div>
        <div className='bg-white space-y-6'>
          <div className='md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center'>
            <h2 className='md:w-1/3 max-w-sm mx-auto'>Account</h2>
            <div className='md:w-2/3 max-w-sm mx-auto'>
              <label className='text-sm text-gray-400'>Email</label>
              <div className='w-full inline-flex border'>
                <div className='pt-2 w-1/12 bg-gray-100 bg-opacity-50'>
                  <svg
                    fill='none'
                    className='w-6 text-gray-400 mx-auto'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <input
                  type='email'
                  className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
                  placeholder='email@example.com'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className='md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center'>
            <h2 className='md:w-1/3 mx-auto max-w-sm'>Personal info</h2>
            <div className='md:w-2/3 mx-auto max-w-sm space-y-5'>
              <div>
                <label className='text-sm text-gray-400'>Full name</label>
                <div className='w-full inline-flex border'>
                  <div className='w-1/12 pt-2 bg-gray-100'>
                    <svg
                      fill='none'
                      className='w-6 text-gray-400 mx-auto'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
                    placeholder='Charly Olivas'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center'>
            <h2 className='md:w-1/3 mx-auto max-w-sm'>More info</h2>
            <div className='md:w-2/3 mx-auto max-w-sm space-y-5'>
              <div>
                <label className='text-sm text-gray-400'>Role</label>
                <div className='w-full inline-flex border'>
                  <div className='w-1/12 pt-2 bg-gray-100'>
                    <svg
                      fill='none'
                      className='w-6 text-gray-400 mx-auto'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
                    placeholder='Software Engineer'
                    value={role}
                    required
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className='text-sm text-gray-400'>Team</label>
                <div className='w-full inline-flex border'>
                  <div className='pt-2 w-1/12 bg-gray-100'>
                    <svg
                      fill='none'
                      className='w-6 text-gray-400 mx-auto'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
                    placeholder='team name'
                    value={team}
                    required
                    onChange={(e) => setTeam(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className='text-sm text-gray-400'>Salary</label>
                <div className='w-full inline-flex border'>
                  <div className='pt-2 w-1/12 bg-gray-100'>
                    <img
                      className='pb-1 pl-1 opacity-40'
                      src='https://img.icons8.com/android/24/000000/us-dollar.png'
                    />
                  </div>
                  <input
                    type='text'
                    className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
                    placeholder='Salary'
                    value={salary}
                    required
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center'>
            <h2 className='md:w-4/12 max-w-sm mx-auto'>Password</h2>

            <div className='w-full max-w-sm mx-auto space-y-5 md:inline-flex pl-2'>
              <div className='w-full inline-flex border-b'>
                <div className='w-1/12 pt-2'>
                  <svg
                    fill='none'
                    className='w-6 text-gray-400 mx-auto'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    />
                  </svg>
                </div>
                <input
                  type='password'
                  className='w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4'
                  placeholder='New'
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className='w-full p-4 text-right text-gray-500'>
            <button className='inline-flex items-center h-10 px-3 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-700'>
              <img
                className='w-6 pr-2'
                src='https://img.icons8.com/metro/26/ffffff/plus.png'
              />
              <span>Add Employee</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
