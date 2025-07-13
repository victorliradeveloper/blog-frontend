export const applyPhoneMask = (value: string): string => {
  value = value.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.substring(0, 11);
  }

  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');

  if (value.length > 10) {
    value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
  } else {
    value = value.replace(/(\d{4})(\d{4})$/, '$1-$2');
  }

  return value;
};
