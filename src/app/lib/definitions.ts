import { z } from 'zod'
 
export const SignInFormSchema = z.object({
    email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .trim()
    .refine((val) => val.endsWith('@gmail.com'), {
      message: 'Email must be a Gmail address.',
    }),
    
  password: z
    .string()
    .min(6, { message: 'Be at least 6 characters long' })
    // .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: 'Contain at least one special character.',
    // })
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined



  export const signUpSt1FormSchema = z.object({
    email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .trim()
    .refine((val) => val.endsWith('@gmail.com'), {
      message: 'Email must be a Gmail address.',
    }),
})
   
export type FormSignUpSt1 =
| {
    errors?: {
      email?: string[]
    }
    message?: string
  }
| undefined


export const SignUpSt2FormSchema = z.object({
  email: z
  .string()
  .email({ message: 'Please enter a valid email.' })
  .trim()
  .refine((val) => val.endsWith('@gmail.com'), {
    message: 'Email must be a Gmail address.',
  }),
  
password: z
  .string()
  .min(6, { message: 'Be at least 6 characters long' })
  .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
  .regex(/[0-9]/, { message: 'Contain at least one number.' })
  .regex(/[^a-zA-Z0-9]/, {
    message: 'Contain at least one special character.',
  })
  .trim(),
  phone: z
  .string()
  .trim()
  .regex(/^[0-9]+$/, { message: 'Phone numbers can only contain numbers' })
  .refine(val => val.length >= 9 && val.length <= 11, {
    message: 'Please enter a phone number between 9 and 11 digits',
  }),
  name: z
  .string()
  .trim()
  .min(1, { message: 'Name is required' }),
  address: z
  .string()
  .trim()
  .min(1, { message: 'address is required' })
  

})

export type FormSignUpSt2 =
  | {
      errors?: {
        email?: string[]
        password?: string[]
        phone?: string[]
        name?: string[]
        address?: string[]
      }
      message?: string
    }
  | undefined
