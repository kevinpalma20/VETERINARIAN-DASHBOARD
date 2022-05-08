import { SubMenu } from './SubMenuResponse';

export interface Menu {
  title?: string;
  icon?: string;
  submenu?: SubMenu[];
}
