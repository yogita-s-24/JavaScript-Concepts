function buildTower(floors) {
    let tower = [];
    for (let i = 0; i < floors; i++) {
      let spaces = ' '.repeat(floors - i - 1);
      let stars = '*'.repeat(2 * i + 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  }