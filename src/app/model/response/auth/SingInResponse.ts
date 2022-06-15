import { Menu } from '../routes/MenuReponse';

export interface SingInResponse {
  token: string;
  routes?: Menu[];
}
