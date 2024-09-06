import Character from '../js/index.js';

test('should level up character correctly', () => {
  const character = new Character('Hero', 1, 50, 30);
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(60);
  expect(character.defence).toBeCloseTo(36);
  expect(character.health).toBe(100);
});

test('should throw error when leveling up dead character', () => {
  const character = new Character('Hero', 1, 50, 30, 0);
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('should correctly apply damage to character', () => {
  const character = new Character('Hero', 1, 50, 30);
  character.damage(50);
  expect(character.health).toBeCloseTo(65);
});

test('should not allow health to drop below 0', () => {
  const character = new Character('Hero', 1, 50, 30);
  character.damage(200);
  expect(character.health).toBe(0);
});
