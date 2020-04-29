const formatValue = (value: number): string => {
  const valor = Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(value);

  return valor;
};

export default formatValue;
