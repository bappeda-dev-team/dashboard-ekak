'use client'

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import Link from "next/link";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [Proses, setProses] = useState<boolean>(false);
    const router = useRouter();

    return (
        <div className="flex flex-wrap justify-center items-center h-screen"
            style={{
                backgroundImage: "url('./backgrounds/login-bg-2.png')",
                backgroundSize: "cover",  // Fit the image inside the box
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-wrap justify-center items-center gap-5 m-5 rounded-lg border bg-gray-300 hover:bg-white border-white shadow-lg shadow-white">
                <div className="flex flex-col justify-center items-center gap-3 m-2">
                    <Image
                        className="mx-[100px]"
                        src="/logo.png"
                        alt="logo"
                        width={90}
                        height={90}
                    />
                    <h1 className="uppercase font-bold text-xl">E-MANER</h1>
                </div>
                {/* LOGIN FORM */}
                <div className="bg-gradient-to-tl from-[#cfa86a] to-[#eed920] rounded-tr-lg rounded-br-lg flex items-center justify-center p-10">
                    <div className={`w-full max-w-md`}>
                        <form className="space-y-4">
                            {/* NIP */}
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                                    USERNAME
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-800 focus:border-yellow-800 sm:text-sm"
                                    {...register('username', { required: 'nip harus terisi' })}
                                />
                                {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                            </div>
                            {/* PW */}
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                                    PASSWORD
                                </label>
                                <div className="flex items-center justify-end">
                                    <input
                                        type={!showPassword ? 'password' : 'text'}
                                        id="password"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-800 focus:border-yellow-800 sm:text-sm"
                                        {...register('password', { required: 'password harus terisi' })}
                                    />
                                    <button
                                        type="button"
                                        className="absolute mt-1 mr-3 text-sm"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <TbEye /> : <TbEyeClosed />}
                                    </button>
                                </div>
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div>
                            <Link href="/">
                                <button
                                    className="w-full px-3 py-1 bg-white rounded-xl cursor-pointer hover:bg-slate-200"
                                    type="submit"
                                    disabled={Proses}
                                >
                                    {Proses ?
                                        <span className="flex">
                                            Login...
                                        </span>
                                        :
                                        "LOGIN"
                                    }
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;