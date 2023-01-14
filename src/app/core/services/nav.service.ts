import { Injectable } from '@angular/core';
import { NavItemDto } from '../dto/navItem';
import { NavMenuDto } from '../dto/navMenu';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor() {}

  getNavMenu() {
    return new NavMenuDto('navMenu', [
      new NavItemDto('profile', 'account_circle', '/profile', null),
      new NavItemDto('approve', 'notifications', '/approve',false),
      new NavItemDto('request', 'notifications', '/request',true),

      new NavItemDto('events', 'local_activity', '/events', null),
      new NavItemDto('technecals', 'dashboard', '/technecals',false),
      new NavItemDto('ngo', 'dashboard', '/ngo',true),

    ]);
  }
}
