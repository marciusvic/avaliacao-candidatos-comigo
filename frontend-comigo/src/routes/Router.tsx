import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";

const AppRouter = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
			<Routes>
                <Route
                    path="/login"
                    element={
                        <LoginPage />
                        }
                />
            </Routes>
        </Suspense>                                               
    )
}


export default AppRouter;