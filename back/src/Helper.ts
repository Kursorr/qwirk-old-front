// Our methods

const isEmpty = (field) => {
  return (field === undefined || field === null || field === '' || field === [] || field === false);
};

export { isEmpty }
