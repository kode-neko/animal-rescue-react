import { urlApi } from '../constants';
import { Animal } from '../model';

function getAnimal(id: string): Promise<Animal> {
  return fetch(`${urlApi}/animal/${id}`, { method: 'GET' })
    .then((raw) => raw.json());
}

function getAnimalList(offset: number, search: string, limit: number): Promise<Animal[]> {
  return fetch(`${urlApi}/animal/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ offset, limit, search }),
  })
    .then((raw) => raw.json());
}

function postAnimal(animal: Animal): Promise<Animal> {
  return fetch(`${urlApi}/animal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then((raw) => raw.json());
}

function putAnimal(animal: Animal): Promise<Animal> {
  return fetch(`${urlApi}/animal`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then((raw) => raw.json());
}

function deleteAnimal(id: string): Promise<boolean> {
  return fetch(`${urlApi}/animal/${id}`, { method: 'DELETE' })
    .then((raw) => raw.json());
}

export {
  getAnimal,
  getAnimalList,
  postAnimal,
  putAnimal,
  deleteAnimal,
};
