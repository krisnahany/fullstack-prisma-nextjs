import prisma from '@/lib/prisma'
import FormAddUser from './addUser';

async function getData() {
  const user = await prisma.user.findMany();
  return user;
}

export default async function Home() {
  const data = await getData()

  return (
    <div className='flex flex-col items-center mt-52 gap-8'>
      <FormAddUser />
      <ul>
        {data.map((d) => (
          <li key={d.id} className='border'>
            <p>No {d.id}</p>
            <p>{d.name}</p>
            <p>{d.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
