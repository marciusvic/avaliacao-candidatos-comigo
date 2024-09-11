import React from 'react';
import { Box, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Typography, Select, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/system';

interface StepContentProps {
  step: number;
  setContactType: (value: string) => void;
  setTicketType: (value: string) => void;
  setVehicle: (value: string) => void;
  setReason: (value: string) => void;
  setDescription: (value: string) => void;
}

const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  '& .MuiRadio-root': {
    borderRadius: '4px',
    border: '1px solid #D1D1D1',
    padding: '8px',
    marginRight: '8px',
  },
  '& .MuiFormControlLabel-label': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '-4px',
  },
  '& .MuiRadio-root.Mui-checked': {
    backgroundColor: '#E3F2FD',
    borderColor: '#1976d2',
  },
  '& .MuiRadio-colorPrimary.Mui-checked': {
    color: '#1976d2',
  },
  '& .description': {
    fontSize: '12px',
    color: '#6B7280',
  },
}));

const StepContent: React.FC<StepContentProps> = ({
  step,
  setContactType,
  setTicketType,
  setVehicle,
  setReason,
  setDescription,
}) => {
  // Usar o tipo SelectChangeEvent no evento de seleção
  const handleVehicleChange = (event: SelectChangeEvent) => {
    setVehicle(event.target.value as string);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Houve contato passivo?</h3>
            <FormControl component="fieldset">
              <RadioGroup row onChange={(e) => setContactType(e.target.value)}>
                <CustomFormControlLabel
                  value="Cliente entrou em contato"
                  control={<Radio />}
                  label={
                    <>
                      Sim
                      <Typography variant="body2" className="description">
                        O cliente entrou em contato
                      </Typography>
                    </>
                  }
                />
                <CustomFormControlLabel
                  value="Contato ainda será feito"
                  control={<Radio />}
                  label={
                    <>
                      Não
                      <Typography variant="body2" className="description">
                        Contato ainda será feito
                      </Typography>
                    </>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Qual o intuito desse ticket?</h3>
            <FormControl component="fieldset">
              <RadioGroup onChange={(e) => setTicketType(e.target.value)}>
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                  <CustomFormControlLabel
                    value="OPERATIONAL"
                    control={<Radio />}
                    label={
                      <>
                        Operacional
                        <Typography variant="body2" className="description">
                          Sub título
                        </Typography>
                      </>
                    }
                  />
                  <CustomFormControlLabel
                    value="SUPPORT"
                    control={<Radio />}
                    label={
                      <>
                        Suporte
                        <Typography variant="body2" className="description">
                          Sub título
                        </Typography>
                      </>
                    }
                  />
                  <CustomFormControlLabel
                    value="RELATION"
                    control={<Radio />}
                    label={
                      <>
                        Relacionamento
                        <Typography variant="body2" className="description">
                          Sub título
                        </Typography>
                      </>
                    }
                  />
                  <CustomFormControlLabel
                    value="SELLING"
                    control={<Radio />}
                    label={
                      <>
                        Vendas
                        <Typography variant="body2" className="description">
                          Sub título
                        </Typography>
                      </>
                    }
                  />
                </Box>
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel id="vehicle-label">Veículo(s)</InputLabel>
              <Select
                labelId="vehicle-label"
                id="vehicle"
                onChange={handleVehicleChange}
                label="Veículo(s)"
              >
                <MenuItem value="Veículo1">Veículo1</MenuItem>
                <MenuItem value="Veículo2">Veículo2</MenuItem>
                <MenuItem value="Veículo3">Veículo3</MenuItem>
                <MenuItem value="Veículo4">Veículo4</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Qual o motivo desse ticket?</h3>
            <FormControl component="fieldset" fullWidth>
              <RadioGroup onChange={(e) => setReason(e.target.value)}>
                <CustomFormControlLabel
                  value="Motivo 1"
                  control={<Radio />}
                  label={
                    <>
                      Motivo 1
                      <Typography variant="body2" className="description">
                        Sub título
                      </Typography>
                    </>
                  }
                />
                <CustomFormControlLabel
                  value="Motivo 2"
                  control={<Radio />}
                  label={
                    <>
                      Motivo 2
                      <Typography variant="body2" className="description">
                        Sub título
                      </Typography>
                    </>
                  }
                />
                <CustomFormControlLabel
                  value="Motivo 3"
                  control={<Radio />}
                  label={
                    <>
                      Motivo 3
                      <Typography variant="body2" className="description">
                        Sub título
                      </Typography>
                    </>
                  }
                />
              </RadioGroup>
            </FormControl>

            <Box mt={2} p={2} bgcolor="#F1F5F9" borderRadius={1}>
              <Typography variant="body1" fontWeight="bold">
                Prazo estimado: 06/04/2024
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Informe o cliente que a resolução deste motivo está prevista em <strong>(3 dias úteis)</strong>.
              </Typography>
            </Box>

            <TextField
                label="Informe mais detalhes sobre o ticket"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                onChange={(e) => setDescription(e.target.value)}
            />

          </div>
        );
      default:
        return "Desconhecido";
    }
  };

  return <Box mt={4}>{renderStepContent(step)}</Box>;
};

export default StepContent;
