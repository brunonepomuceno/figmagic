import trash from 'trash';

import { writeFile } from '../bin/functions/writeFile';

test('It should throw an error if no parameter is provided', async () => {
  await expect(writeFile()).rejects.toThrow();
});

test('It can write to a file if provided input', async () => {
  const FILE = '__test-writefile1.txt';
  await writeFile(JSON.stringify({ something: 1234 }), './', FILE);
  await trash(`__test-writefile*`);
});

test('It can write a token to a file if provided input', async () => {
  const FILE = '__test-writefile2.txt';
  await writeFile(JSON.stringify({ something: 1234 }), './', FILE, true);
  await trash(`__test-writefile*`);
});
