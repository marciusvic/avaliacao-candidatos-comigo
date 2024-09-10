import express, { Request, Response } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { requireRole } from '../middleware/roleMiddleware';
import { createTicket, getTicketById, getAllTickets, updateTicket, deleteTicket } from '../services/ticketService';
import { TicketData } from '../services/ticketService';

// Rotas para tickets
const router = express.Router();

//Rota para listar um ticket por id
router.get('/tickets/:id', authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const ticket = await getTicketById(Number(id));
    res.json(ticket);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
});

// Rota para criar um ticket
router.post("/tickets", authenticateToken, async (req: Request<{}, {}, TicketData>, res: Response) => {
  try {
    const ticket = await createTicket(req.body);
    res.json(ticket);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Erro desconhecido' });
    }
  }
});

// Rota para listar todos os tickets
router.get("/tickets", authenticateToken, async (req: Request, res: Response) => {
  try {
    const tickets = await getAllTickets();
    res.json(tickets);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
});

// Rota para atualizar um ticket
router.put("/tickets/:id", authenticateToken, async (req: Request<{ id: string }, {}, TicketData>, res: Response) => {
  const { id } = req.params;
  try {
    const updatedTicket = await updateTicket(Number(id), req.body);
    res.json(updatedTicket);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
});

// Rota para deletar um ticket, apenas ADMIN pode deletar
router.delete('/tickets/:id', authenticateToken, requireRole('ADMIN'), async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    await deleteTicket(Number(id));
    res.json({ message: 'Ticket deletado com sucesso' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro desconhecido' });
    }
  }
});

export default router;
