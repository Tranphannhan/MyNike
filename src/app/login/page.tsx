'use client'
import {JSX, useEffect} from "react";
import './login.css'
import { signIn } from '@/app/actions/auth'
import { useActionState } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Login(): JSX.Element{
    const [state, action, pending] = useActionState(signIn, undefined)
    const router = useRouter()

    useEffect(() => {
      if (state?.success) {
        router.push('/') 
      }
    }, [state, router])
  
    return(
        <div className="login">
            <form action={action}>
                <div className="login_logo">
                    <Link href="/"><img loading="lazy" src="images/logonike.jpg" alt=""/></Link>
                    <img loading="lazy" src="images/logonikemini.png" alt="" width="30px"/>
                </div>
                <div className="login_text">
                    <label >Saisis ton adresse e-mail pour nous rejoindre ou te connecter.</label>
                    <label >Viet Nam <Link href="/">Modifier</Link></label>
                </div>



                <div className="login_ipt_gmail">
                    <input 
                        id="email" 
                        name="email" 
                        type="text" 
                        placeholder=" " 
                        className={state?.errors?.email ? "input-error" : ""}
                        defaultValue={state?.values?.email ?? ''}

                    />
                    <label className={`${state?.errors?.email ? "text-error" : ""}`}>E-mail*</label>
                    <div className="login_ipt_gmail_background"></div>
                    <div className={`Notification ${state?.errors?.email ? "text-error" : ""}`}>{state?.errors?.email && state.errors.email}</div>
                </div>

                <div className="login_ipt_pass">
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder=" " 
                        className={state?.errors?.password ? "input-error" : ""}
                        defaultValue={state?.values?.password ?? ''}
                    />
                    <label className={` ${state?.errors?.password ? "text-error" : ""}`}>Password*</label>
                    <div className="login_ipt_pass_background"></div>
                    <div className="Notification"> 
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
                </div>

                <p className="text-error">{state?.message && state.message}</p>

                <div className="login_text2">
                    En continuant, jaccepte la <a href="">Politique de<br/> confidentialité</a> et aux Conditions dutilisation de Nike<br/> <a href="">Make in Viet Nam.</a>
                </div>
                <button disabled={pending} type="submit">Continuer</button>
            </form>
           
        </div>
    )
}