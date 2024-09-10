import React from "react";
import { Login } from "../../components/Login/Login";
import loginLogo from "../../images/loginlogo.svg"

export const LoginPage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-full lg:w-1/2 flex justify-center items-center bg-comigo-gray">
                <Login />
            </div>

            <div className="hidden lg:flex lg:w-1/2 bg-comigo-blue justify-center items-center">
                <img src={loginLogo} alt="Login Logo" className="max-w-full h-auto" />
            </div>
        </div>
  );
};

