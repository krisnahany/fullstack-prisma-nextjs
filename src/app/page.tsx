import prisma from '@/lib/prisma'
import TableAction from '@/components/TableAction';
import FormAddUser from '@/components/AddUser';
import { cache } from 'react';

// export const revalidate = 1
// export const dynamic = "force-dynamic";

async function getData() {
  // const user = await UserModels.findMany();
  const user = await prisma.user.findMany();
  return user;
  // const res = await fetch('http://192.168.3.24:3000/api/users')
  // const { result } = await res.json()
  // return result
}

// const getData = cache(async () => {
//   const user = await prisma.user.findMany();
//   return user;
// })

export default async function Home() {
  const data = await getData();

  return (
    <div className='flex flex-col min-h-screen justify-center items-center gap-8'>
      <FormAddUser />
      <div>
        <table className='table-auto border-collapse border border-slate-400'>
          <thead className='[&>tr>th]:border [&>tr>th]:border-slate-300 [&>tr>th]:p-4'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='[&>tr>td]:border [&>tr>td]:border-slate-300 [&>tr>td]:p-4'>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <TableAction userId={d.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
