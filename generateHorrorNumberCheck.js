const { writeFile } = require('fs/promises');

const initial = -20;
const final = 20000;
const rows = [];
for (let num = initial + 1; num <= final; num++) {
  const entry =
    num.toString().includes(13) || num.toString().includes(666) || num < 0
      ? `  } else if (num === ${num}) {
    return BAD;`
      : `  } else if (num === ${num}) {
    return OK;`;
  rows.push(entry);
}
const content = `module.exports = function horrorNumberCheck(num) {
  const OK = 'хорошо';
  const BAD = 'НЕПРИЯТНОСТЬ';
  if (num < ${initial}) {
    return BAD;
${rows.join('\n')}
  }
}
`;
writeFile('tasks/horrorNumberCheck.js', content, 'utf8');
