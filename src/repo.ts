import { type Pet } from './model/pet';

export const repo = () => {
  const data: Pet[] = [
    {
      id: crypto.randomUUID(),
      name: 'Clarita',
      breed: 'White Cat',
      isAdopted: true,
      owner: 'Alejandro Irastorza',
    },
    {
      id: crypto.randomUUID(),
      name: 'Guru',
      breed: 'Black Cat',
      isAdopted: true,
      owner: 'Vivianne Leal',
    },
    {
      id: crypto.randomUUID(),
      name: 'Travis',
      breed: 'Border collie',
      isAdopted: false,
      owner: 'Alejandro Campos',
    },
  ];

  return data;
};
