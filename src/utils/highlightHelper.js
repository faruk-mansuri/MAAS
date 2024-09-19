export function mapDate(highlight) {
  let startDate;
  let endDate;

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (highlight === '7 days') {
    endDate = currentDate.toISOString().split('T')[0]; // Current date
    startDate = new Date(currentDate); // Create a copy of currentDate
    startDate.setDate(currentDate.getDate() - 6); // Subtract 29 days
    startDate = startDate.toISOString().split('T')[0]; // Start date
    return { startDate, endDate };
  }
  if (highlight === '30 days') {
    endDate = currentDate.toISOString().split('T')[0]; // Current date
    startDate = new Date(currentDate); // Create a copy of currentDate
    startDate.setDate(currentDate.getDate() - 29); // Subtract 29 days
    startDate = startDate.toISOString().split('T')[0]; // Start date
    return { startDate, endDate };
  }
  if (highlight === 'this month') {
    endDate = currentDate.toISOString().split('T')[0]; // Current date
    startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
      .toISOString()
      .split('T')[0]; // First day of the current month
    return { startDate, endDate };
  }
  if (highlight === 'last month') {
    const lastMonthDate = new Date(currentDate); // Create a copy of currentDate
    lastMonthDate.setMonth(currentDate.getMonth() - 1);
    endDate = new Date(
      lastMonthDate.getFullYear(),
      lastMonthDate.getMonth() + 1,
      0
    )
      .toISOString()
      .split('T')[0]; // Last day of the previous month
    startDate = new Date(
      lastMonthDate.getFullYear(),
      lastMonthDate.getMonth(),
      1
    )
      .toISOString()
      .split('T')[0]; // First day of the previous month

    return { startDate, endDate };
  }
  if (highlight === 'last 12 months') {
    endDate = currentDate.toISOString().split('T')[0]; // Current date
    startDate = new Date(currentDate); // Create a copy of currentDate
    startDate.setFullYear(currentDate.getFullYear() - 1); // Subtract 1 year
    startDate = startDate.toISOString().split('T')[0]; // Start date
    return { startDate, endDate };
  }
}
