export function convertTime(timestamp) {
    const date = new Date(timestamp * 1000); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const formattedDate = `${day}/${month}`;
    
    return formattedDate;
  }