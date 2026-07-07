export type PetshopService = {
  clientId: string;
  createdAt: string;
  executionDate: string;
  finished: boolean;
  id: string;
  petId: string;
  type: string;
  updatedAt: string;
};

export type PetshopServiceWithPetName = PetshopService & {
  petName: string;
};
