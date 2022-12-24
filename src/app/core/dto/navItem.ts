export class NavItemDto {
  displayName: string;
  icon: string;
  route: string;
  roll:string;

  constructor(displayName: string, icon: string, route: string,roll:string) {
    this.displayName = displayName;
    this.icon = icon;
    this.route = route;
    this.roll = roll;

  }
}
