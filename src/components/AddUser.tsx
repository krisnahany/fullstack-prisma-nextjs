'use client'

import prisma from "@/lib/prisma";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function FormAddUser() {
    const router = useRouter();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitData = async (e: any) => {
        e.preventDefault();
        try {
            const payload = { name, email }
            await fetch(`api/user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })

            // router.push('/blog')
            router.refresh();
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <form onSubmit={submitData}>
            <h1 className='text-center mb-5'>Add New User</h1>
            <div className='flex gap-5'>
                <div>
                    <label htmlFor="" className='block'>Name</label>
                    <input type="text" className='border' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                </div>
                <div>
                    <label htmlFor="" className='block'>Email</label>
                    <input type="text" className='border' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' />
                </div>
            </div>
            <button type='submit' className='bg-slate-400'>Add User</button>
        </form>
    )
}