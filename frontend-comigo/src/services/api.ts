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

export interface TicketData {
  id?: number;
  type: string;
  reason: string;
  description: string;
  customer: string;
  vehicle: string;
  status: string;
  term?: string;
  userId: number;
  createdAt?: string;
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

export const getUserByToken = async (token: string) => {
  try {
    const response = await axiosInstance.get("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao recuperar os dados do usuário:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Erro ao recuperar os dados do usuário.");
  }
};

//Tickets Requests

export const fetchTickets = async (token: string) => {
  try {
    const response = await axiosInstance.get("/api/tickets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTicketById = async (id: number, token: string) => {
  try {
    const response = await axiosInstance.get(`/api/tickets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createTicket = async (data: TicketData, token: string) => {
  try {
    const response = await axiosInstance.post("/api/tickets", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTicket = async (id: number, data: TicketData, token: string) => {
  try {
    const response = await axiosInstance.put(`/api/tickets/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTicket = async (id: number, token: string) => {
  try {
    const response = await axiosInstance.delete(`/api/tickets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};