import { PresentationType } from '../Interface/PresentationType';
import { UserType } from '../Interface/UserType';

export interface HeaderProps {
  user: UserType;
  presentation: PresentationType;
  logout: () => void;
}
