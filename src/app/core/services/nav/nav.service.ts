import { Injectable } from '@angular/core';
import { NavItemDto } from '../../dto/navItem';
import { NavMenuDto } from '../../dto/navMenu';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor() {}

  getNavMenu() {
    return new NavMenuDto('navMenu', [
      new NavItemDto('profile', 'account_circle', '/profile', ''),
      new NavItemDto('notifications', 'notifications', '/notifications',''),
      new NavItemDto('events', 'local_activity', '/events', ''),
      new NavItemDto('dashboard', 'dashboard', '/dashboard',''),
    ]);
  }
}
