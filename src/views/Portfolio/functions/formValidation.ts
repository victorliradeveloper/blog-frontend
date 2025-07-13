export const validateName = function (value: string) {
  return value.length > 2;
};

export const validateEmail = function (value: string) {
  return /\S+@\S+\.\S+/.test(value);
};

export const validatePhone = function (value: string) {
  return value.length > 2;
};

export const validateSubject = function (value: string) {
  return value.length > 2;
};

export const validateMessage = function (value: string) {
  return value.length > 2;
};
