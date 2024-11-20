'use client';

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";


const LoginModal = () => {
    const loginModal = useLoginModal()
    
    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="E-mail" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            
                <div className="p-5 bg-red-500 text-white rounded-xl">
                    the error message
                </div>

                <CustomButton
                label="Submit"
                onClick={() => console.log('test')}         
                />   
            </form>

        </>
    )

    return (
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log In"
            content={content}
        />
    )
}

export default LoginModal;