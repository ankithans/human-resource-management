import React, { useState } from "react";

export const Navbar = ({ signOut }) => {
  const [userMenu, setUserMenu] = useState(false);
  const [mobileUserMenu, setMobileUserMenu] = useState(false);

  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='h-8 w-8'
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5NyA0OTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMyMy41MDQgMTY1aC00NWw0NSA3Mi4xMjdjMTQuOTk4LTcuNDExIDI5LjEyNy0xNy4xNzkgNDEuODMzLTI5LjMwNSAxLjg4OS0xLjgwMyAyLjc0Ni00LjQ0NSAyLjIxMS03LTQuMjY4LTIwLjM4Ny0yMi40MzctMzUuODIyLTQ0LjA0NC0zNS44MjJ6IiBmaWxsPSIjNjA2M2VmIiBkYXRhLW9yaWdpbmFsPSIjMWI3NGQ2IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE3My40OTUgMTY1Yy0yMS42MDYgMC0zOS43NzYgMTUuNDM0LTQ0LjA0NCAzNS44MjEtLjUzNSAyLjU1Ni4zMjIgNS4xOTggMi4yMTEgNy4wMDEgMTIuNzA2IDEyLjEyNiAyNi44MzUgMjEuODk1IDQxLjgzMyAyOS4zMDVsNDUtNzIuMTI3eiIgZmlsbD0iIzYzNjZmMSIgZGF0YS1vcmlnaW5hbD0iIzU0YTVmZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNzguNTA1IDE2NWgtNjAuMDA5Yy0yNC44NTMgMC00NSAyMC4xNDctNDUgNDV2MjcuMTI3YzQ3LjE0IDIzLjI5MiAxMDIuODY5IDIzLjI5MiAxNTAuMDA5IDB2LTI3LjEyN2MwLTI0Ljg1My0yMC4xNDctNDUtNDUtNDV6IiBmaWxsPSIjNjM2NmYxIiBkYXRhLW9yaWdpbmFsPSIjMWU4YWZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTYwIDY2LjAxMWMtMTYuNTcgMC0zMCAxMy40My0zMCAzMHYyMDVoNjB2LTIwNWMwLTE2LjU3LTEzLjQzLTMwLTMwLTMweiIgZmlsbD0iI2ZmYjczOSIgZGF0YS1vcmlnaW5hbD0iI2ZmYjczOSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNzYuMjM4IDQwMC41OTR2NzcuNDE4bDU3LjI2Mi0xMS4wMTJ2LTMweiIgZmlsbD0iI2ZmYjczOSIgZGF0YS1vcmlnaW5hbD0iI2ZmYjczOSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTYgMzY5LjUxMi0xMzYtMTE4LjQzNHYtMTg0LjQ0M2MwLTE2LjM0Ny0xMi44MTYtMzAuMTY1LTI5LjE1Ny0zMC42MTMtMTYuOTU0LS40NjQtMzAuODQzIDEzLjE0MS0zMC44NDMgMjkuOTg5djIyMC43MDZjMCA3LjQxNSAxLjgzMiAxNC43MTQgNS4zMzMgMjEuMjVsNjkuNjY3IDExNS4wNDUtMTAgNTVoMTM4LjV2LTQ5LjA1OXoiIGZpbGw9IiNmZmQxN2UiIGRhdGEtb3JpZ2luYWw9IiNmZmQxN2UiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjAzLjUgNDY3LTE1IDE1IDE1IDE1aDIyLjVjNC4xNDIgMCA3LjUtMy4zNTggNy41LTcuNXYtMjIuNXoiIGZpbGw9IiM2MzY2ZjEiIGRhdGEtb3JpZ2luYWw9IiNiOGQ4ZmYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzUuODgyIDQ3My4xNTgtMi43MjcgMTVjLS44MzcgNC42MDQgMi43IDguODQyIDcuMzc5IDguODQyaDE2Mi45NjZ2LTMwaC0xNjAuMjM5Yy0zLjYyNCAwLTYuNzMgMi41OTItNy4zNzkgNi4xNTh6IiBmaWxsPSIjNjM2NmYxIiBkYXRhLW9yaWdpbmFsPSIjZGJlYmZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQzNyA2Ni4wMTFjMTYuNTcgMCAzMCAxMy40MyAzMCAzMHYyMDVoLTYwdi0yMDVjMC0xNi41NyAxMy40My0zMCAzMC0zMHoiIGZpbGw9IiNmZmI3MzkiIGRhdGEtb3JpZ2luYWw9IiNmZmI3MzkiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNDY2LjE1NyAzNi4wMjNjLTMuOTU0LjEwOC03LjY5OCAxLjAwNi0xMS4xMDcgMi41MjZ2MjQ2LjI0NmwtMzMuMDUgMTM4LjIxNyA2OS42NjctMTE1LjA0NGMzLjUwMS02LjUzNiA1LjMzMy0xMy44MzUgNS4zMzMtMjEuMjV2LTIyMC43MDdjMC0xNi44NDgtMTMuODktMzAuNDUzLTMwLjg0My0yOS45ODh6IiBmaWxsPSIjZmZiNzM5IiBkYXRhLW9yaWdpbmFsPSIjZmZiNzM5IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQ2NC44NDEgMzA0LjcyN2MxLjQzLTQuNDUgMi4xNTktOS4wOTYgMi4xNTktMTMuNzd2LTIyNC45NDZjMC0xMi4yNzItNC45MTUtMjIuODE1LTExLjk1LTI3LjQ2My0xMC42ODIgNC43NjQtMTguMDUgMTUuNjk2LTE4LjA1IDI4LjA4OHYxODQuNDQzbC0xMzYgMTE4LjQzMy0zNy41IDY3LjQ4OHYzMGwzMCAxMS4wMTJoMTM4LjVsLTEwLTU1eiIgZmlsbD0iI2ZmZDE3ZSIgZGF0YS1vcmlnaW5hbD0iI2ZmZDE3ZSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im00MjkuOTk4IDQ2Ny05LjU0NSAxNSAxNSAxNWgyMS4wMTNjNC42NzkgMCA4LjIxNi00LjIzOCA3LjM3OS04Ljg0MmwtMi43MjctMTVjLS42NDgtMy41NjYtMy43NTQtNi4xNTgtNy4zNzktNi4xNTh6IiBmaWxsPSIjNjM2NmYxIiBkYXRhLW9yaWdpbmFsPSIjYjhkOGZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTI2My41IDQ2N3YyMi41YzAgNC4xNDIgMy4zNTggNy41IDcuNSA3LjVoMTY0LjQ1MmwtNS40NTQtMzB6IiBmaWxsPSIjNjM2NmYxIiBkYXRhLW9yaWdpbmFsPSIjZGJlYmZmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQyNy42MDkgMjI5LjI3N2MtMTEuODcxLTExLjIzOC0zMC43MDUtMTAuNTMtNDIuMjYzIDEuMDI5bC0xMDQuMjcyIDEwNC4yNzJjLTEwLjg1OCAxMC44NTgtMTcuNTczIDI1Ljg1OC0xNy41NzMgNDIuNDI3djU5Ljk5NWMzMy4xMzUgMCA1OS45OTctMjYuODYgNjAtNTkuOTk1bDEwNC43MTQtMTA0LjcxM2MxMS45MTItMTEuOTE0IDExLjcxMS0zMS4zNTYtLjYwNi00My4wMTV6IiBmaWxsPSIjZmZlYWMzIiBkYXRhLW9yaWdpbmFsPSIjZmZlYWMzIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTIzMy41IDM3Ny4wMDVjMC0xNi41NjktNi43MTYtMzEuNTY5LTE3LjU3My00Mi40MjdsLTEwNC4yNzItMTA0LjI3MiA5MS44NDUgMTk4LjY0N2M4LjgyNyA1LjEwOSAxOS4wNjggOC4wNDcgMzAgOC4wNDd6IiBmaWxsPSIjZmZkMTdlIiBkYXRhLW9yaWdpbmFsPSIjZmZkMTdlIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE5MC4yNTMgMzM0LjU3OC03OC41OTgtMTA0LjI3MmMtMTEuNTU5LTExLjU1OS0zMC4zOTItMTIuMjY3LTQyLjI2My0xLjAyOS0xMi4zMTcgMTEuNjU5LTEyLjUxOCAzMS4xMDEtLjYwNCA0My4wMTRsMTA0LjcxMiAxMDQuNzE0Yy4wMDIgMjIuMjAyIDEyLjA3MiA0MS41NzMgMjkuOTk5IDUxLjk0OHYtNTEuOTQ4Yy4wMDEtMTYuNTY5LTUuMDYyLTMxLjU2OS0xMy4yNDYtNDIuNDI3eiIgZmlsbD0iI2ZmZWFjMyIgZGF0YS1vcmlnaW5hbD0iI2ZmZWFjMyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNDguNSAwdjEzNWMzNy4yNzkgMCA2Ny41LTMwLjIyMSA2Ny41LTY3LjVzLTMwLjIyMS02Ny41LTY3LjUtNjcuNXoiIGZpbGw9IiM2MDYzZWYiIGRhdGEtb3JpZ2luYWw9IiMxYjc0ZDYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjg2IDY3LjVjMC0zNy4yNzktMTYuNzg5LTY3LjUtMzcuNS02Ny41LTM3LjI3OSAwLTY3LjUgMzAuMjIxLTY3LjUgNjcuNXMzMC4yMjEgNjcuNSA2Ny41IDY3LjVjMjAuNzExIDAgMzcuNS0zMC4yMjEgMzcuNS02Ny41eiIgZmlsbD0iIzYzNjZmMSIgZGF0YS1vcmlnaW5hbD0iIzFlOGFmZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
                  alt='logo'
                />
              </div>

              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <a
                    href='/'
                    className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Admin Dashboard
                  </a>
                  <a
                    href='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Manage Employees
                  </a>
                </div>
              </div>
            </div>

            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>
                <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>

                <div className='ml-3 relative'>
                  <div>
                    <button
                      onClick={() => setUserMenu(!userMenu)}
                      className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      id='user-menu'
                      aria-haspopup='true'
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </button>
                  </div>

                  {userMenu && (
                    <div
                      className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu'
                    >
                      <a
                        href='/'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Your Profile
                      </a>

                      <a
                        href='/'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Settings
                      </a>

                      <a
                        href='.'
                        onClick={signOut}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                      >
                        Sign out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setMobileUserMenu(!mobileUserMenu)}
                className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileUserMenu && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <a
                href='/'
                className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Admin Dashboard
              </a>

              <a
                href='/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Manage Employees
              </a>
            </div>
            <div className='pt-4 pb-3 border-t border-gray-700'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium leading-none text-white'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium leading-none text-gray-400'>
                    tom@example.com
                  </div>
                </div>
                <button className='ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>
              </div>
              <div className='mt-3 px-2 space-y-1'>
                <a
                  href='/'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                >
                  Your Profile
                </a>

                <a
                  href='/'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                >
                  Settings
                </a>

                <a
                  href='.'
                  onClick={signOut}
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
