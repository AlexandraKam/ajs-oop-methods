import Character from '../app';

test('Ошибка в name', () => {
  expect(() => new Character()).toThrow('Ошибка в name');
});
test('Ошибка в type', () => {
  expect(() => new Character('Name', 'Magician1')).toThrow('Ошибка в type');
});

test('should error for levelUp', () => {
  const characterError = new Character('Иван', 'Bowman');
  characterError.damage(110);
  expect(() => characterError.levelUp()).toThrow('Персонаж мертв');
});

test('should level 2, health 100, attack 30, defence 30', () => {
  const characterLevel = new Character('Иван', 'Bowman');
  characterLevel.attack = 25;
  characterLevel.defence = 25;
  characterLevel.levelUp();
  const expected = {
    name: 'Иван',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(characterLevel).toEqual(expected);
});

test('should health 0', () => {
  const characterDamage = new Character('Иван', 'Bowman');
  characterDamage.defence = 25;
  characterDamage.damage(150);
  expect(characterDamage.health).toBe(0);
});
