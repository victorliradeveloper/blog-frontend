function dateFormatter(input: string) {
  if (!input) {
    return '';
  }

  const date = new Date(input);
  if (isNaN(date.getTime())) {
    return '';
  }

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

  return formattedDate.replace(/de (\w{3})/, (match, month) => {
    const meses: { [key: string]: string } = {
      jan: 'Jan',
      fev: 'Fev',
      mar: 'Mar',
      abr: 'Abr',
      mai: 'Mai',
      jun: 'Jun',
      jul: 'Jul',
      ago: 'Ago',
      set: 'Set',
      out: 'Out',
      nov: 'Nov',
      dez: 'Dez',
    };

    if (meses[month.toLowerCase()]) {
      return `de ${meses[month.toLowerCase()]}`;
    }

    return match;
  });
}

export default dateFormatter;
