'use client'
import {JSX, useActionState, useEffect} from "react";
import './login.css'
import { signupSt1 } from "../actions/auth";
import { useRouter } from "next/navigation";
export default function Login(): JSX.Element{
    const [state, action, pending] = useActionState(signupSt1, undefined)
      const router = useRouter()
    
        useEffect(() => {
          if (state?.success) {
            const gmail = state.values
            if(gmail.email)
            sessionStorage.setItem('gmail',gmail.email)
            router.push('/signup/createinfo') 
          }
        }, [state, router])

    return(
        <div className="login">
            <form action={action}>
                <div className="login_logo">
                    <a href="index.html"><img loading="lazy" src="images/logonike.jpg" alt=""/></a>
                    <img loading="lazy" src="images/logonikemini.png" alt="" width="30px"/>
                </div>
                <div className="login_text">
                    <label >Saisis ton adresse e-mail pour nous rejoindre ou te connecter.</label>
                    <label >Viet Nam <a href="">Modifier</a></label>
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
                    <label >E-mail*</label>
                    <div className="login_ipt_gmail_background"></div>
                    <div className={`Notification ${state?.errors?.email ? "text-error" : ""}`}>{state?.errors?.email && state.errors.email}</div>
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