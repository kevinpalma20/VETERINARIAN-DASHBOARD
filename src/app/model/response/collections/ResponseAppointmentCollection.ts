import { CitaResponse } from './../entity/CitaResponse';
import { ResponseCollection } from './ResponseCollection';

export interface ResponseAppointmentCollection extends ResponseCollection {
  collection: CitaResponse[];
}
