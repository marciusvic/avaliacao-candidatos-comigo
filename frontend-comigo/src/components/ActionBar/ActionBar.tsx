import React, { useState } from "react";
import { Button, Drawer, Tabs, Tab, Box, TextField, MenuItem, Select, InputLabel, FormControl, InputAdornment } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import StepContent from '../StepContent/StepContent';
import { useAuth } from '../../hooks/AuthContext';
import { fetchTickets, createTicket, TicketData } from '../../services/api';

interface ActionBarProps {
    getTickets: () => void;
  }

export const ActionBar: React.FC<ActionBarProps> = ({ getTickets }) => {
    const [contactType, setContactType] = useState('');
    const [ticketType, setTicketType] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [term, setTerm] = useState('2024-09-15T21:52:06.795Z');
    const { user } = useAuth();
    const userId = Number(user?.id);

    const [period, setPeriod] = useState('Hoje');
    const [orderBy, setOrderBy] = useState('Data da abertura');
    const [status, setStatus] = useState('');
    const [tipo, setTipo] = useState('');
    const [motivo, setMotivo] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const steps = ["Contato", "Ticket", "Motivo"];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveStep(newValue);
    };

    const handleSubmit = async () => {
        const ticketData: TicketData = {
            type: ticketType,
            reason,
            description,
            customer: contactType,
            vehicle,
            status: 'TODO',
            term,
            userId,
        };
        try{
            console.log(ticketData);
            await createTicket(ticketData, user?.token);
            getTickets();
            setDrawerOpen(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex justify-start items-center p-4 bg-comigo-gray space-x-4">
            <Button
                variant="contained"
                endIcon={<AddIcon />}
                className="bg-comigo-blue-nav text-white rounded-full px-6 py-2 normal-case"
                sx={{ textTransform: 'none' }}
                onClick={handleDrawerToggle}
            >
                Abrir ticket
            </Button>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: { width: 600 },
                }}
            >
                <Box p={3} width="100%" role="presentation">
                    <h2>Novo Atendimento ao Cliente</h2>
                    <Tabs
                        value={activeStep}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="etapas de atendimento"
                    >
                        <Tab label="Contato" />
                        <Tab label="Ticket" />
                        <Tab label="Motivo" />
                    </Tabs>
                    <Box mt={4}>
                        <StepContent
                            step={activeStep}
                            setContactType={setContactType}
                            setTicketType={setTicketType}
                            setVehicle={setVehicle}
                            setReason={setReason}
                            setDescription={setDescription}
                        />
                    </Box>
                    <Box mt={4} display="flex" justifyContent="space-between">
                        <Button disabled={activeStep === 0} onClick={handleBack}>
                            Voltar
                        </Button>
                        {activeStep < 2 ? (
                            <Button variant="contained" onClick={handleNext}>
                                Avançar
                            </Button>
                        ) : (
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Cadastrar
                            </Button>
                        )}
                    </Box>
                </Box>
            </Drawer>
            <TextField
                id="search"
                label="Pesquisar"
                variant="outlined"
                size="small"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <FormControl variant="outlined" size="small" className="w-40">
                <InputLabel id="period-label">Período</InputLabel>
                <Select
                    labelId="period-label"
                    id="period"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    label="Período"
                >
                    <MenuItem value="Hoje">Hoje</MenuItem>
                    <MenuItem value="Ontem">Ontem</MenuItem>
                    <MenuItem value="Última semana">Última semana</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" className="w-48">
                <InputLabel id="orderBy-label">Ordenado por</InputLabel>
                <Select
                    labelId="orderBy-label"
                    id="orderBy"
                    value={orderBy}
                    onChange={(e) => setOrderBy(e.target.value)}
                    label="Ordenado por"
                >
                    <MenuItem value="Data da abertura">Data da abertura</MenuItem>
                    <MenuItem value="Status">Status</MenuItem>
                    <MenuItem value="Tipo">Tipo</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" className="w-32">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    labelId="status-label"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Status"
                >
                    <MenuItem value="Aberto">Aberto</MenuItem>
                    <MenuItem value="Fechado">Fechado</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" className="w-32">
                <InputLabel id="tipo-label">Tipo</InputLabel>
                <Select
                    labelId="tipo-label"
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    label="Tipo"
                >
                    <MenuItem value="Reclamação">Reclamação</MenuItem>
                    <MenuItem value="Sugestão">Sugestão</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" className="w-32">
                <InputLabel id="motivo-label">Motivo</InputLabel>
                <Select
                    labelId="motivo-label"
                    id="motivo"
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    label="Motivo"
                >
                    <MenuItem value="Erro técnico">Erro técnico</MenuItem>
                    <MenuItem value="Atendimento">Atendimento</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};
