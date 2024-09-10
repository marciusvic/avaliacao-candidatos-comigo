import { PrismaClient, Ticket } from "@prisma/client";
import { Status, Type } from "@prisma/client";

const prisma = new PrismaClient();

export interface TicketData {
  type: Type;
  reason: string;
  description: string;
  costumer: string;
  vehicle: string;
  status: Status;
  userId: number;
}

//Função para pegar um ticket pelo id
export const getTicketById = async (id: number): Promise<Ticket | null> => {
  return await prisma.ticket.findUnique({
    where: { id: id },
  });
};

// Função para criar um ticket
export const createTicket = async (data: TicketData): Promise<Ticket> => {
  const { type, reason, description, costumer, vehicle, status, userId } = data;
  if (!type || !reason || !description || !costumer || !vehicle || !status || !userId) {
    throw new Error("Campos obrigatórios estão faltando");
  }
  return await prisma.ticket.create({
    data:{
      type,
      reason,
      description,
      costumer,
      vehicle,
      status,
      userId
    }
  });
};

// Função para listar todos os tickets
export const getAllTickets = async (): Promise<Ticket[]> => {
  return await prisma.ticket.findMany();
};

// Função para atualizar um ticket
export const updateTicket = async (id: number, data: TicketData): Promise<Ticket> => {
  const { type, reason, description, costumer, vehicle, status, userId } = data;
  return await prisma.ticket.update({
    where: { id: id },
    data: {
      type,
      reason,
      description,
      costumer,
      vehicle,
      status,
      userId,
    },
  });
}

// Função para deletar um ticket
export const deleteTicket = async (id: number): Promise<Ticket> => {
  return await prisma.ticket.delete({
    where: { id: id },
  });
};
