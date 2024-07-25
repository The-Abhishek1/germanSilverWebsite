"use client";
import React, { useState } from "react";
import Image from "next/image";
import google from "@public/google.jpg";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, signinGoogle } from "@app/(Firebase)/config";

//Main Function
export default function Rightside() {
  const navigation = useRouter();
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        console.log(user);
        setSignIn(true);
        if (
          email === "abhishekgowda85384@gamil.com"
          // || "idiot63666@gmail.com"
        ) {
          navigation.push("/adminx");
        } else {
          navigation.push("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const GoogleSignIn = () => {
    signInWithPopup(auth, signinGoogle)
      .then(() => {
        navigation.push("/");
        setSignIn(true);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //Main Code
  return (
    <div className="flex w-[300px] rounded-md flex-col bg-slate-200 p-5 h-[400px]">
      <h2 className="text-[20px] font-bold text-center">SignIn</h2>
      <button
        onClick={() => {
          navigation.push("signup");
        }}
        className="bg-blue-600 md:hidden text-white p-2 text-[13px] font-bold w-[100%] rounded-2xl mt-5"
      >
        Don't have an account? signup.
      </button>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 mt-10">
          <input
            className="outline-none bg-slate-100 p-2 rounded-lg text-[13px]"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
          />
          <input
            className="outline-none bg-slate-100 p-2 rounded-lg text-[13px]"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-[13px] p-2 rounded-2xl text-white font-bold mt-5"
          >
            {loading ? "Loading!!!" : "SignIn"}
          </button>
          <p className="text-center font-bold ">OR</p>
          <div
            onClick={GoogleSignIn}
            className="flex cursor-pointer p-2 rounded-2xl flex-row bg-slate-100 items-center justify-center"
          >
            <Image src={google} height={20} alt="Google" />
            <p className="text-[13px] font-bold">Sign in with google</p>
          </div>
        </div>
      </form>
    </div>
  );
}
