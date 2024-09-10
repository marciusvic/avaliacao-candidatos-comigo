import axiosInstance from "./config";

interface LoginUser {
    email: string;
    password: string;
}

interface RegisterUser {
    name: string;
    email: string;
    password: string;
    role?: string;
}

export const login = async (data: LoginUser) => {
    const { email, password } = data;
    try {
        const response = await axiosInstance.post("/api/auth/login", {
            email,
            password,
        });
        return response.data;
  } catch (error) {
        console.error(error);
  }
};

export const register = async (data: RegisterUser) => {
    const { name, email, password, role } = data;
    try {
        const response = await axiosInstance.post("/api/auth/register", {
            name,
            email,
            password,
            role,
        });
        return response.data;
    } catch (error) {
        console.error(error);
  }
}