import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { HomePage } from "../pages/Home/HomePage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const AppRouter = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
			<Routes>
                <Route
					path="/"
					element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
					}
				/>
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