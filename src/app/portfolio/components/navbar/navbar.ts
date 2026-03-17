import { Component } from '@angular/core';
import { PerfilNav } from './perfil-nav/perfil-nav';
import { OptionNav } from './option-nav/option-nav';

@Component({
  selector: 'app-navbar',
  imports: [PerfilNav, OptionNav],
  templateUrl: './navbar.html',
})
export class Navbar {}
