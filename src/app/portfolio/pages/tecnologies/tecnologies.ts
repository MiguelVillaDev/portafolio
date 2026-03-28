import { Tecnology } from './../../interfaces/tecnologies.interface';
import { Component, signal } from '@angular/core';
import { ObjectList } from '../../components/object-list/object-list';

@Component({
  selector: 'app-tecnologies',
  imports: [ObjectList],
  templateUrl: './tecnologies.html',
})
export default class Tecnologies {
  tecnology = signal<Tecnology[]>([
    {
      id: '1',
      title: 'JavaScript',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '2',
      title: 'NodeJS',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '3',
      title: 'Python',
      image: 'assets/img/Python.png',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '4',
      title: 'CSS',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '5',
      title: 'SQL',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '6',
      title: 'Django',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '7',
      title: 'React',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
    {
      id: '8',
      title: 'Angular',
      image: '',
      description:
        'Usos de esta tecnología para crear paginas reponsivas en fronted y backend con nodeJs',
      level: 'Medio',
    },
  ]);
}
