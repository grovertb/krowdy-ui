export type DashboardProps = {
  user?: object;
  userMenu?: object[];
  menus?: object[];
  menuTopLeft?: object[];
  menuTopRight?: object[];
  actions?: object;
  logo?: object;
};

declare const Dashboard: React.ComponentType<DashboardProps>;

export default Dashboard;