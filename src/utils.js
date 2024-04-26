// Function to format a list of objects into a formatted table
function formatTable(data) {
    if (data.length === 0) {
      return 'No data available.';
    }
  
    const header = Object.keys(data[0]);
    const table = [header.join(' | ')];
    table.push('-'.repeat(table[0].length));
  
    data.forEach(item => {
      const row = header.map(key => item[key]);
      table.push(row.join(' | '));
    });
  
    return table.join('\n');
  }
  
  module.exports = {
    formatTable
  };
  