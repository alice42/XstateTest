// LayoutRoute interface
export interface LayoutRouteInterface {
  exact?: boolean;
  path?: string;
  component?: any;
  layout?: any;
}
// Layout interface
export interface LayoutInterface {
  //   className?: string;
  children: JSX.Element;
}
