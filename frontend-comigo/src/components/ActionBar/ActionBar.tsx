import React from "react";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, InputAdornment } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export const ActionBar: React.FC = () => {
    const [period, setPeriod] = React.useState('Hoje');
    const [orderBy, setOrderBy] = React.useState('Data da abertura');
    const [status, setStatus] = React.useState('');
    const [tipo, setTipo] = React.useState('');
    const [motivo, setMotivo] = React.useState('');

    const handlePeriodChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPeriod(event.target.value as string);
    };

    const handleOrderByChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOrderBy(event.target.value as string);
    };

    const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStatus(event.target.value as string);
    };

    const handleTipoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTipo(event.target.value as string);
    };

    const handleMotivoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMotivo(event.target.value as string);
    };

    return (
        <div className="flex justify-start items-center p-4 bg-comigo-gray space-x-4">
            <Button
                variant="contained"
                endIcon={<AddIcon />}
                className="bg-comigo-blue-nav text-white rounded-full px-6 py-2 normal-case"
                sx={{ textTransform: 'none' }}
            >
                Abrir ticket
            </Button>

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
                    //onChange={handlePeriodChange}
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
                    //onChange={handleOrderByChange}
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
                    //onChange={handleStatusChange}
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
                    //onChange={handleTipoChange}
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
                    //onChange={handleMotivoChange}
                    label="Motivo"
                >
                    <MenuItem value="Erro técnico">Erro técnico</MenuItem>
                    <MenuItem value="Atendimento">Atendimento</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};
