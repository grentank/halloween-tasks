const { writeFile } = require('fs/promises');

const initial = -30;
const final = 33299;
const rows = [];
for (let num = initial + 1; num <= final; num++) {
  const entry =
    num.toString().includes(13) || num.toString().includes(666) || num < 0
      ? `    case ${num}:
      return BAD;`
      : `    case ${num}:
      return OK;`;
  rows.push(entry);
}
const content = `module.exports = function horrorNumberCheck(num) {
  const OK = 'хорошо';
  const BAD = 'НЕПРИЯТНОСТЬ';
  switch (num) {
${rows.join('\n')}
    default:
      return BAD;
  }
};
`;
writeFile('tasks/horrorNumberCheck.js', content, 'utf8');
