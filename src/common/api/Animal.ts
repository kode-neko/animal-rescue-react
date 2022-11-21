import { Animal } from '../model';

function getAnimal(offset: number): Promise<Animal[]> {
  return fetch('http://localhost:3001/animal/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ offset, limit: 10 }),
  })
    .then((raw) => raw.json());
}

export {
  getAnimal,
};
