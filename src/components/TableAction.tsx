'use client'

export default function TableAction({ userId }: any) {

    const deleteUser = async (id: any) => {
        console.log(id);

        try {
            await fetch(`api/user/${id}`, {
                method: 'DELETE',
            })
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