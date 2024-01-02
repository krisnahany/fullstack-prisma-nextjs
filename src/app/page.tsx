import prisma from '@/lib/prisma'
import TableAction from '@/components/TableAction';
import FormAddUser from '@/components/AddUser';
import { cache } from 'react';
import { headers } from 'next/headers'

// export const revalidate = 1; // If you want to revalidate every 10s
// OR
// export const dynamic = "force-dynamic"; // If you want no caching at all

async function getData() {
  // const res = await fetch(`${process.env.API_URL_DEV}/api/user`, {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' }
  // })
  // const { data } = await res.json()

  const res = await import('@/app/api/user/route');
  const { data } = await (await res.GET())?.json();

  return data;

  // const host = headers().get("host");
  // const protocal = process?.env.NODE_ENV === "development" ? "http" : "https"
  // let res = await fetch(`${protocal}://${host}/api/user`, { cache: "no-store" });
  // let { data } = await res.json();

  // return data;


  // const user = await prisma.user.findMany();
  // return user;
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
            {data.map((d: any) => (
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
