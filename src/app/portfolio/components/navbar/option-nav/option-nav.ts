import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-option-nav',
  imports: [RouterLink],
  templateUrl: './option-nav.html',
  styleUrl: './styles.css',
})
export class OptionNav {
  menuOptions = [
    {
      label: 'Inicio',
      route: '/home',
    },
    {
      label: 'Proyectos',
      route: '/home/projects',
    },
    {
      label: 'Tecnologías ',
      route: '/home/tecnologies',
    },
    {
      label: 'contacto',
      route: '/home/contact',
    },
  ];
}
