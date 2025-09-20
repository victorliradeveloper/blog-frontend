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

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate; 
}

export default dateFormatter;
