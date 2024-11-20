'use client';

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";


const SignupModal = () => {
    const signupModal = useSignupModal()
    
    const content = (
        <>
            <h2> Coming Soon </h2>

        </>
    )

    return (
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign Up"
            content={content}
        />
    )
}

export default SignupModal;