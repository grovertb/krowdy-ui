export interface UserPointProps {
  active?     : boolean;
  firstName?  : string;
  lastName?   : string;
  leftPercent?: number;
  photo?      : string;
  size?       : number;
  subtitle?   : string;
}
declare const UserPoint: React.ComponentType<UserPointProps>;

export default UserPoint;