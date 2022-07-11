export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11
      && typeof type === 'string' && (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) {
      this.name = name;
      this.type = type;
    } else {
      throw new Error('...');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += 0.2 * this.attack;
      this.defence += 0.2 * this.defence;
    } else {
      throw new Error('...');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
