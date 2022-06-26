const clearTable = () => {
  const totalCases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  totalCases.forEach((_case, index) => {
    document.getElementById(JSON.stringify(index + 1)).innerHTML = '';
  });
};

export default clearTable;
