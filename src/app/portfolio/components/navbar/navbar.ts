import { Component } from '@angular/core';
import { PerfilNav } from './perfil-nav/perfil-nav';
import { OptionNav } from './option-nav/option-nav';

@Component({
  selector: 'app-navbar',
  imports: [PerfilNav, OptionNav],
  templateUrl: './navbar.html',
  styleUrl: './nav-styles.css',
})
export class Navbar {}
