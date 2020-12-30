import React, { useContext, useEffect } from "react";
import { TableRow } from "../shared/TableRow";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/Admin/AdminProvider";

export const AdminHome = () => {
  const { loading, getAllEmployees, employees } = useContext(AdminContext);

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <div>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='text-xs text-right pb-5 sm:text-sm'>
              <Link to='/admin/addEmployee'>
                <button className='inline-flex items-center h-10 px-3 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-700'>
                  <img
                    className='w-6 pr-2'
                    src='https://img.icons8.com/metro/26/ffffff/plus.png'
                  />
                  <span>Add Employee</span>
                </button>
              </Link>
            </div>
            <div className='flex flex-col'>
              <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                  <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Name
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Title
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Status
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                          >
                            Role
                          </th>
                          <th scope='col' className='relative px-6 py-3'>
                            <span className='sr-only'>Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200'>
                        {employees.map((e) => (
                          <TableRow
                            key={e.id}
                            image='https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg'
                            name={e.name}
                            email={e.email}
                            title={e.role}
                            subtitle={e.team}
                            status={`₹ ${e.salary}`}
                            role={e.role}
                            edit={() => {}}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
