export const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do 0
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  