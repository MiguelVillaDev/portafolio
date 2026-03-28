import { Component, input } from '@angular/core';
import { ObjectListItem } from './object-list-item/object-list-item';
import { Tecnology } from '../../interfaces/tecnologies.interface';

@Component({
  selector: 'app-object-list',
  imports: [ObjectListItem],
  templateUrl: './object-list.html',
  styleUrl: './style.css',
})
export class ObjectList {
  tecnolgies = input<Tecnology[]>([]);
}
