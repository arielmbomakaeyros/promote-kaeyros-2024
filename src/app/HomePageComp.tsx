"use client"
import ClientForm from '@/components/ClientForm';
import React from 'react'
import { useForm } from 'react-hook-form';
import logo from "../../public/images/logo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HomePageComp = () => {

    const router = useRouter ()
  return (
    <div className=''>
        <div className='flex flex-col gap-4 mb-4'>
            <div className="w-[200px] h-[200px] flex flex-col justify-center">
                <Image
                    onClick={() => {
                        router.push("https://kaeyros-analytics.com")
                    }}
                    className="cursor-pointer"
                    src={ logo }
                    alt="Kaeyros-analytics logo"
                />
            </div>
            <div className='flex justify-center'>
                <h1 className='text-center'>Kindly Put you contacts details</h1>
            </div>
        </div>
        <ClientForm />
    </div>
  )
}

export default HomePageComp