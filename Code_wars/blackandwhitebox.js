function checkeredBoard(dimension) {
    let dark = '\u25A1'; 
    let light = '\u25A0'; 
    
    let board = [];
  
    for (let i = 0; i < dimension; i++) {
      let row = [];
      for (let j = 0; j < dimension; j++) {
        if ((i + j) % 2 === 0) {
          row.push(dimension % 2 === 0 ? dark : light);
        } else {
          row.push(dimension % 2 === 0 ? light : dark);
        }
      }
      board.push(row.join(' '));
    }
  
    return board.join('\n');
  }

  checkeredBoard(4)