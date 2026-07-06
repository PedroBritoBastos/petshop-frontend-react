export type Pet = {
  id: string;
  clientId: string;
  name: string;
  age: number;
  weight: string;
  isAdopted: boolean;
  imageUrl: string;
  adoptionClientId: string | null;
  createdAt: string;
  updatedAt: string;
};
