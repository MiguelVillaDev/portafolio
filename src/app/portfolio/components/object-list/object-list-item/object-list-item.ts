import { Component, input } from '@angular/core';
import { Tecnology } from '../../../interfaces/tecnologies.interface';

@Component({
  selector: 'app-object-list-item',
  imports: [],
  templateUrl: './object-list-item.html',
  styleUrl: './styles.css',
})
export class ObjectListItem {
  data = input<Tecnology[]>([]);
}
