import React, { useRef, useState } from 'react'
import { auth } from '../../firebase';

const Login = () => {

  const [passwordError, setPasswordError] = useState("")
  const [emailError, setEmailError] = useState("")
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e)=>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser)=>{
        console.log(authUser);
      })
      .catch((error)=>{
        if (error.code === "auth/email-already-in-use") {
          setEmailError("User already exists");
        } else if (error.code === "auth/weak-password") {
          setPasswordError("Password should be 6 or more characters");
        } else {
          setEmailError("Invalid email or password");
        }
      });

  };

  const signIn =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    )
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      if (error.code === "auth/wrong-password" || error.code === "auth/invalid-email") {
        setPasswordError("Invalid email or password.");
      } else {
        setPasswordError(error.message);
      }
    });


  }
  return (
    <div className='flex w-full justify-center items-center bg-white h-[100vh] px-[100px] '>
      <div className='w-3/5'>
        <img src="https://images.pexels.com/photos/1499477/pexels-photo-1499477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
        className='h-full w-full'
        />
      </div>
      <div className='w-2/5 p-8 flex flex-col gap-[10px] '>
      <h1 className='text-4xl'>Welcome to Market</h1>
      <h2 className='text-2xl'>sign in to continue</h2>
      <div className=''>
      <form action="" className='flex flex-col gap-[20px] '>
        <div className='flex flex-col w-full'>

        <input type="text"
        ref={emailRef}
        placeholder='Email address'
        className='h-[50px] border border-gray-500 outline-none pl-4'
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div className='flex flex-col w-full'>

        <input type="password"
        ref={passwordRef}
        placeholder='Password' 
        className='h-[50px] border border-gray-500 outline-none pl-4'
        />
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>
        <button 
        onClick={signIn}
        className='bg-black h-[40px] w-full text-white'>
          Sign In</button>
        <p className='flex '>
          Dont have an Account ? 
          <button 
          onClick={register}
          className='pl-2'
          >sign up</button>
        </p>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login