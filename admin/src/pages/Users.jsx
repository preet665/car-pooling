import React from 'react'
import SideBar from '../components/Dashboard/SideBar'
import Navbar from '../components/Navbar/Navbar'

const UserPage = () => {
    const users = [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com',
          role: 'Admin'
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'janesmith@example.com',
          role: 'User'
        },
        {
          id: 3,
          name: 'Bob Johnson',
          email: 'bobjohnson@example.com',
          role: 'User'
        },
        {
          id: 4,
          name: 'Sarah Lee',
          email: 'sarahlee@example.com',
          role: 'User'
        },
      ];
  return (
    <main>
    <Navbar />
    <section className='h-screen py-10 bg-black grid grid-cols-12 text-white'>
      <aside className='col-span-2 ml-7  bg-zinc-800 h-3/4 w-full p-8 rounded-lg'>
    <SideBar />
      </aside>
      <section className='col-span-10 ml-12 w-11/12 bg-zinc-800  rounded-xl p-10'>
      <div className="w-full px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">User List</h2>
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/3 py-2 px-4 text-gray-600 font-medium uppercase text-sm">Name</th>
            <th className="w-1/3 py-2 px-4 text-gray-600 font-medium uppercase text-sm">Email</th>
            <th className="w-1/3 py-2 px-4 text-gray-600 font-medium uppercase text-sm">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4 text-gray-600 font-medium">{user.name}</td>
              <td className="py-2 px-4 text-gray-600">{user.email}</td>
              <td className="py-2 px-4 text-gray-600">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </section>
    </section>
    
  </main>
  )
}

export default UserPage