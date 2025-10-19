import { SignInFormSchema, FormState, signUpSt1FormSchema, FormSignUpSt1, FormSignUpSt2, SignUpSt2FormSchema } from '@/app/lib/definitions'


export async function signIn(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignInFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      // Trả lại giá trị người dùng đã nhập
      values: {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
      },
    };
  }
  
  const FormDataUser = new FormData();
  FormDataUser.append('gmail', validatedFields.data.email);
  FormDataUser.append('pass', validatedFields.data.password);
  
  try {
    const res = await fetch('http://localhost:3001/users/logIn', {
      method: 'POST',
      body: FormDataUser,
    });

    const data = await res.json();

    if (data.status == true) {
      sessionStorage.setItem('token',data.token)
      return {
        success: true,
      }
    
      
    } else {
      return {
        message: data.message || 'Login failed.',
        values: validatedFields.data,
      };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Something went wrong.',
      values: validatedFields.data,
    };
  }
  
}




export async function signupSt1(state: FormSignUpSt1, formData: FormData) {
  // Validate form fields
  const validatedFields = signUpSt1FormSchema.safeParse({
    email: formData.get('email'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      // Trả lại giá trị người dùng đã nhập
      values: {
        email: formData.get('email') as string,
      },
    };
  }
  
  const gmail = validatedFields.data.email
  
  try {
    const res = await fetch('http://localhost:3001/users/checkGmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // ✅ rất quan trọng
      },
      body: JSON.stringify({gmail: gmail}),
    });

    const data = await res.json();
    console.log(data)
    if (data.status == true) {
      return {
        values: validatedFields.data,
        success: true,
      }
    
      
    } else {
      return {
        message: data.message || 'Login failed.',
        values: validatedFields.data,
      };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Something went wrong.',
      values: validatedFields.data,
    };
  }
  
}


export async function signupSt2(state: FormSignUpSt2, formData: FormData) {
  // Validate form fields
  const validatedFields = SignUpSt2FormSchema.safeParse({
    email: formData.get('Gmail'),
    password: formData.get('password'),
    name: formData.get('username'),
    phone: formData.get('Phone'),
    address: formData.get('Address'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      // Trả lại giá trị người dùng đã nhập
      values: {
        email: formData.get('Gmail') as string,
        password: formData.get('password') as string,
        name: formData.get('username') as string,
        phone: formData.get('Phone') as string,
        address: formData.get('Address') as string,
      },
    };
  }

  const img = formData.get('img');

  if (!(img instanceof File) || img.name === '') {
    return {
      message: 'Please select avatar.' ,
      values: validatedFields.data 
    };
  }
  
  
  console.log(validatedFields.data)

  const FormDataUser = new FormData();
  FormDataUser.append('gmail', validatedFields.data.email);
  FormDataUser.append('pass', validatedFields.data.password);
  FormDataUser.append('name', validatedFields.data.name);
  FormDataUser.append('address', validatedFields.data.address);
  FormDataUser.append('phone', validatedFields.data.phone);
  FormDataUser.append('img', img);

  try {
    const res = await fetch('http://localhost:3001/users/register', {
      method: 'POST',
      body: FormDataUser,
    });

    const data = await res.json();
    if (data.status == true) {
      return {
        values: validatedFields.data,
        success: true,
      }
    
      
    } else {
      return {
        message: data.message || 'Login failed.',
        values: validatedFields.data,
      };
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      message: 'Something went wrong.',
      values: validatedFields.data,
    };
  }
  
}