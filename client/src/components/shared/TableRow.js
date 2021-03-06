import React from "react";
import { Link, Route } from "react-router-dom";
import { EditEmployee } from "../Admin/EditEmployee";

export const TableRow = ({
  image,
  name,
  email,
  title,
  subtitle,
  status,
  role,
  edit,
  to,
}) => {
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-10 w-10'>
            <img className='h-10 w-10 rounded-full' src={image} alt='' />
          </div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>{name}</div>
            <div className='text-sm text-gray-500'>{email}</div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{title}</div>
        <div className='text-sm text-gray-500'>{subtitle}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          {status}
        </span>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {role}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <button
          onClick={edit}
          className='text-indigo-600 hover:text-indigo-900'
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
