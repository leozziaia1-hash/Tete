import fs from 'fs';

const p1 = fs.readFileSync('/part1.txt', 'utf8');
const p2 = fs.readFileSync('/part2.txt', 'utf8');
const p3 = fs.readFileSync('/part3.txt', 'utf8');
const p4 = fs.readFileSync('/part4.txt', 'utf8');

fs.writeFileSync('./index.html', p1 + p2 + p3 + p4);

console.log('Stitched successfully!');
