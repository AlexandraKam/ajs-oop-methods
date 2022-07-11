import Character from '../app';

test('should error', () => {
  expect(() => new Character()).toThrow('...');
});

test('should name, type', () => {
  const characterNew = new Character('Иван', 'Bowman');
  const characterSwordsman = new Character('Иван', 'Swordsman');
  const characterMagician = new Character('Иван', 'Magician');
  const characterDaemon = new Character('Иван', 'Daemon');
  const characterUndead = new Character('Иван', 'Undead');
  const characterZombie = new Character('Иван', 'Zombie');
  expect(characterNew.name).toBe('Иван');
  expect(typeof characterNew.name).toBe('string');
  expect(characterNew.name.length).toBe(4);
  expect(characterNew.type).toBe('Bowman');
  expect(typeof characterNew.type).toBe('string');
  expect(characterSwordsman.type).toBe('Swordsman');
  expect(characterMagician.type).toBe('Magician');
  expect(characterDaemon.type).toBe('Daemon');
  expect(characterUndead.type).toBe('Undead');
  expect(characterZombie.type).toBe('Zombie');
});

test('should error for levelUp', () => {
  const characterError = new Character('Иван', 'Bowman');
  characterError.damage(110);
  expect(() => characterError.levelUp()).toThrow('...');
});

test('should level 2, health 100, attack 30, defence 30', () => {
  const characterLevel = new Character('Иван', 'Bowman');
  characterLevel.attack = 25;
  characterLevel.defence = 25;
  characterLevel.levelUp();
  expect(characterLevel.level).toBe(2);
  expect(characterLevel.health).toBe(100);
  expect(characterLevel.attack).toBe(30);
  expect(characterLevel.defence).toBe(30);
});

test('should health 0', () => {
  const characterDamage = new Character('Иван', 'Bowman');
  characterDamage.defence = 25;
  characterDamage.damage(150);
  expect(characterDamage.health).toBe(0);
});
