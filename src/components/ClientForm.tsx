"use client"; 
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ClientRegistrationFormValues } from './client-form/clientForm';
import ThreeDotsLoadingAnimation from './loaders/TreeDotsLoading';
import { useRouter } from 'next/navigation';

const ClientForm = () => {

    const router = useRouter (); 

    const {
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting, isSubmitted}, 
        reset, 
        getValues, 
    } = useForm<ClientRegistrationFormValues> (); 

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ClientRegistrationFormValues> = async (data) => {
        setIsLoading(true);

        console.log("data", data)

        try {
            const result = await fetch("/api/save_client_info", {
                method: "POST", 
                headers: {
                    "Content-type": "application/json", 
                }, 
                body: JSON.stringify(data)
            }); 

            console.log("..........", result)

            if (result.ok) {
                // router.refresh(); 
                // router.push("/"); 
                // console.log("it has passed the fetch")
                alert("Merci pour votre souscripition")
            } else {
                throw new Error("Problem pour enregistrer un user. ")
            }
        } catch (error) {
            console.log(error)
        }

        setTimeout(() => {
          setIsLoading(false);
        //   toast.success('Successfully toasted!');
        //   push('/');
        }, 5000);
    };

    const [ establishUser, setEstablishedUser ] = useState ()

    const getAllClients = async () => {
        try {
    
            const users = await fetch(`http://localhost:3000/api/save_client_info`, {
                cache: "no-store", 
                // next: { revalidate: 10 }, 
            }); 
      
            console.log("-----=-------====-----------====", users)
      
            if (!users.ok) {
                throw new Error("Failed to fetch users"); 
            } else {
                const test = await users.json()
                setEstablishedUser (test)
                console.log("__________===", test)
                // return await users.json(); 
            }
        } catch (error) {
            console.log("Error loading attendancesToday: ", error); 
        }
    }

    console.log("999999", establishUser)

    useEffect (() => {
        getAllClients ()
    }, [])

    return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Nom et Prenom</label>
                <input 
                    {...register("fullName", {
                        required: "Nom/Prenom Obligatoire", 
                    })}
                    type='text' 
                    placeholder='Entrer votre Nom et Prenom ici'
                    // errors={ errors?.office_id?.message }
                    className='py-4 px-4 rounded-2xl text-black outline-none w-full'
                />
                <p className='text-[.9rem]' style={{
                    color: "red"
                }}>
                    { errors?.fullName?.message }
                </p>
                
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    {...register("email", {
                        required: "Email Obligatoire", 
                    })}
                    type='text' 
                    placeholder='Entrex votre addresse email ici'
                    className='py-4 px-4 rounded-2xl text-black outline-none w-full'
                />
                <p className='text-[.9rem]' style={{
                    color: "red"
                }}>
                    { errors?.email?.message }
                </p>
            </div>
            <div>
                <label htmlFor="">Phone Number</label>
                <input 
                    {...register("phoneNumber", {
                        required: "Contact", 
                        minLength: {
                            value: 9, 
                            message: "Numero doit etre au moins 9 chiffres"
                        }
                    })}
                    type='number' 
                    placeholder='Entrez votre contact ici'
                    className='py-4 px-4 rounded-2xl text-black outline-none w-full'
                />
                <p className='text-[.9rem]' style={{
                    color: "red"
                }}>
                    { errors?.phoneNumber?.message }
                </p>
            </div>
            <div>
                <label htmlFor="">Entreprise/Societe</label>
                <input 
                    {...register("companyName", {
                        required: "Entrez nom de votre compagnie", 
                    })}
                    type='text' 
                    placeholder='Nom et Prenom'
                    className='py-4 px-4 rounded-2xl text-black outline-none w-full'
                />
            </div>

            <div>
                <label htmlFor="">Service</label>
                <select
                    {...register("interestingService", {
                        required: "Entrez nom du Produit que vous desirez", 
                    })}
                className='py-4 px-4 rounded-2xl text-black outline-none w-full'>
                    <option value="SEMA">SEMA</option>
                    <option value="PAYOUTLY">PAYOUTLY</option>
                    <option value="AIRO">AIRO</option>
                    <option value="SWIVY">SWIVY</option>
                </select>
            </div>

            <div className="mt-4 w-full">
                <button
                    disabled={isLoading ? true : false}
                    className={` ${ isLoading ? "bg-white" : "bg-slate-500" } w-full  py-4 px-4 rounded-2xl hover:bg-slate-950`}
                >
                    {isLoading ? <ThreeDotsLoadingAnimation color="white" /> : <>Sauvegarder</>}
                </button>
            </div>
            
        </form>
    )
}

export default ClientForm