import Undead from '../undead';

test('Создание нового персонажа Undead', () => {
  const received = new Undead('Иван');
  const expected = {
    name: 'Иван',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
