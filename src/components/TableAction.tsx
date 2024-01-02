'use client'

import { useRouter } from "next/navigation";


export default function TableAction({ userId }: any) {
    const router = useRouter();
    const deleteUser = async (id: any) => {
        console.log(id);

        try {
            await fetch(`/api/user/${id}`, {
                method: 'DELETE',
                // body: JSON.stringify({
                //     id: id,
                // })
            })

            router.refresh()
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <div className='flex gap-2 [&>span]:text-xs'>
            <span role='button'>Show</span>
            <span role='button'>Edit</span>
            <span role='button' onClick={() => deleteUser(userId)}>Delete</span>
        </div>
    )
}