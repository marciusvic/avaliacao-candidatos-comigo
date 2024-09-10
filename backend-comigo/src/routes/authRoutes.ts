import express, { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { authenticateToken } from '../middleware/authMiddleware';
import { JwtPayload } from 'jsonwebtoken';

// Rotas para autenticação
const router = express.Router();
interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

router.post('/register', async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;
    console.log(req.body);
    try {
      const user = await registerUser(name, email, password, role);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Erro desconhecido' });
      }
    }
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await loginUser(email, password);

    if (user) {
      const { password, ...userWithoutPassword } = user;
      res.json({ token, user: userWithoutPassword });
    } else {
      res.status(400).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Erro desconhecido' });
    }
  }
});

router.get('/me', authenticateToken, (req: CustomRequest, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Usuário não autenticado' });
  }

  res.json({ user });
});



export default router;
