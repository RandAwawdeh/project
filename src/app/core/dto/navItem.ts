export class NavItemDto {
  displayName: string;
  icon: string;
  route: string;
  isUser:boolean|null

  constructor(displayName: string, icon: string, route: string,isUser:boolean |null) {
    this.displayName = displayName;
    this.icon = icon;
    this.route = route;
    this.isUser = isUser;

  }
}
