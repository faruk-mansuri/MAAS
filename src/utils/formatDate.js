export const formattedDates = (dateArray, salesInputValue) => {
  if (salesInputValue === 'last 12 months') {
    const newDates = dateArray.map((dateString) => {
      const dateObj = new Date(dateString);

      const options = { month: 'short', year: 'numeric' };
      return dateObj.toLocaleDateString('en-US', options);
    });

    return newDates;
  }

  const dates = dateArray.map((dateString) => {
    const dateObj = new Date(dateString);

    const options = { month: 'short', day: '2-digit' };
    return dateObj.toLocaleDateString('en-US', options);
  });

  return dates;
};
