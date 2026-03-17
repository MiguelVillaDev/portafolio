import { Component } from '@angular/core';
import { ObjectListItem } from './object-list-item/object-list-item';

@Component({
  selector: 'app-object-list',
  imports: [ObjectListItem],
  templateUrl: './object-list.html',
})
export class ObjectList {}
