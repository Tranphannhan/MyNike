'use client'
import { useActionState, useEffect, useState } from 'react'
import './createIF.css'
import { signupSt2 } from '@/app/actions/auth'
import { useRouter } from 'next/navigation'

export default function CreateInFo() {
  const [gmail, setGmail] = useState <string>('')
  const [state, action, pending] = useActionState(signupSt2, undefined)

  useEffect(()=>{
       const local = sessionStorage.getItem('gmail')
       if(local){
          setGmail(local)
       }
  },[])

  const router = useRouter()
      
          useEffect(() => {
            if (state?.success) {
              router.push('/login') 
            }
          }, [state, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md flex w-full max-w-4xl overflow-hidden">

        {/* Cột bên trái */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2  text-white p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg text-center">Login to access your account and manage your profile.</p>
        </div>

        {/* Cột bên phải - Form */}
        <div className="w-full md:w-1/2 p-8 space-y-3">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form className="space-y-6" action={action}>
            <div className="space-y-1 text-sm">
              <label htmlFor="Gmail" className="block text-gray-700">Gmail</label>
              <input 
              type="text" 
              readOnly value={gmail} 
              name="Gmail" 
              id="Gmail" 
              placeholder="Gmail"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div className={`Notification ${state?.errors?.email ? "text-error" : ""}`}>{state?.errors?.email && state.errors.email}</div>


            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
              defaultValue={state?.values?.name ?? ''}
              type="text" name="username" id="username" placeholder="Username"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div className={`Notification ${state?.errors?.name ? "text-error" : ""}`}>{state?.errors?.name && state.errors.name}</div>


            <div className="space-y-1 text-sm">
              <label htmlFor="Address" className="block text-gray-700">Address</label>
              <input 
              defaultValue={state?.values?.address ?? ''}
              type="text" name="Address" id="Address" placeholder="Address"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
            <div className={`Notification ${state?.errors?.address ? "text-error" : ""}`}>{state?.errors?.address && state.errors.address}</div>


            <div className="space-y-1 text-sm">
              <label htmlFor="Phone" className="block text-gray-700">Phone</label>
              <input 
              defaultValue={state?.values?.phone ?? ''}
              type="text" name="Phone" id="Phone" placeholder="Phone"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600" />
            </div>
                <div className={`Notification ${state?.errors?.phone ? "text-error" : ""}`}>{state?.errors?.phone && state.errors.phone}</div>


            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
               defaultValue={state?.values?.password ?? ''}
               type="password" name="password" id="password" placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600" />
              <div className="flex justify-end text-xs text-gray-600">
              </div>
            </div>
            <div className={`Notification ${state?.errors?.password ? "text-error" : ""}`}>
              {state?.errors?.password && (
                        <div>
                        <p className="text-error">Password must:</p>
                        <ul>
                            {state.errors.password.map((error) => (
                            <li className="text-error" key={error}>- {error}</li>
                            ))}
                        </ul>
                        </div>
                )}</div>
            

            <input type="file" id='img' name="img" className="block" />
            <div className={`Notification ${state?.message ? "text-error" : ""}`}>{state?.message && state.message}</div>

            <button type="submit"
              disabled={pending}
              className="block w-full p-3 text-center rounded-md text-white bg-violet-600 hover:bg-violet-700 transition">Sign in</button>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

        </div>
      </div>
    </div>
  )
}
