import { PetResponse } from './PetResponse';
import { ResponseCollection } from './ResponseCollection';

export interface ResponsePetsCollection extends ResponseCollection {
  collection: PetResponse[];
}
