const { EOL } = require('node:os');
const horrorNumberCheck = require('../tasks/horrorNumberCheck');
const { describe, it } = require('node:test');
const assert = require('node:assert').strict;

describe('Функция horrorNumberCheck', () => {
  it('Возвращает "хорошо" в некоторых случаях', () => {
    assert.equal(horrorNumberCheck(3), 'хорошо');
    assert.equal(horrorNumberCheck(5), 'хорошо');
    assert.equal(horrorNumberCheck(6), 'хорошо');
    assert.equal(horrorNumberCheck(17), 'хорошо');
    assert.equal(horrorNumberCheck(20202), 'хорошо');
    assert.equal(horrorNumberCheck(10103), 'хорошо');
    assert.equal(horrorNumberCheck(30577), 'хорошо');
    assert.equal(horrorNumberCheck(7321), 'хорошо');
  });
  it('Возвращает "НЕПРИЯТНОСТЬ" в некоторых случаях', () => {
    assert.equal(horrorNumberCheck(-15), 'НЕПРИЯТНОСТЬ');
    assert.equal(horrorNumberCheck(-1), 'НЕПРИЯТНОСТЬ');
    assert.equal(horrorNumberCheck(13), 'НЕПРИЯТНОСТЬ');
    assert.equal(horrorNumberCheck(5136), 'НЕПРИЯТНОСТЬ');
    assert.equal(horrorNumberCheck(4013), 'НЕПРИЯТНОСТЬ');
    assert.equal(horrorNumberCheck(1378), 'НЕПРИЯТНОСТЬ');
    assert.equal(horrorNumberCheck(26667), 'НЕПРИЯТНОСТЬ');
  });
  it('Длина функции не больше 10 строк', () => {
    const lines = horrorNumberCheck.toString().split(EOL).length;
    assert.ok(lines <= 10, `Количество строк фукнции равно ${lines}, что больше 10`);
  });
});
