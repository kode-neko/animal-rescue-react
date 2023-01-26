import { Animal } from '../model';

const {
  VITE_SERVER_PORT: SERVER_PORT,
  VITE_SERVER_URL: SERVER_URL,
} = import.meta.env;

function getAnimal(id: string): Promise<Animal> {
  return fetch(`http://${SERVER_URL}:${SERVER_PORT}/animal/${id}`, { method: 'GET' })
    .then((raw) => raw.json());
}

function getAnimalList(offset: number, search: string): Promise<Animal[]> {
  return fetch(`http://${SERVER_URL}:${SERVER_PORT}/animal/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ offset, limit: 10, search }),
  })
    .then((raw) => raw.json());
}

function postAnimal(animal: Animal): Promise<Animal> {
  return fetch(`http://${SERVER_URL}:${SERVER_PORT}/animal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then((raw) => raw.json());
}

function putAnimal(animal: Animal): Promise<Animal> {
  return fetch(`http://${SERVER_URL}:${SERVER_PORT}/animal`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then((raw) => raw.json());
}

function deleteAnimal(id: string): Promise<boolean> {
  return fetch(`http://${SERVER_URL}:${SERVER_PORT}/animal/${id}`, { method: 'DELETE' })
    .then((raw) => raw.json());
}

export {
  getAnimal,
  getAnimalList,
  postAnimal,
  putAnimal,
  deleteAnimal,
};
