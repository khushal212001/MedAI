"use client"
import { UserDetailContext } from '@/context/UserDetailContext';
import { useUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import axios from'axios'
import { useEffect, useState } from 'react';

export type UsersDetail = {
    name:string,
    email:string,
    credits:number
}

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

    const {user} = useUser();
    const [userDetail,setUserDetail] = useState<any>(undefined)

    useEffect(()=>{
        user && CreateNewUser()
    },[user])


    const CreateNewUser =async ()=>{
        const result = await axios.post('api/users')
        console.log(result.data)
        setUserDetail(result.data)
    }

  return (
    <div>
        <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
            {children}
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider