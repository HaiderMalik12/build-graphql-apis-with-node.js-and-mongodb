import * as path from 'path';
import * as fs from 'fs';

export const loadGQLFile = (type) => {
  const filePath = path.join(__dirname, '../api', type)
  return fs.readFileSync(filePath, 'utf-8')
}