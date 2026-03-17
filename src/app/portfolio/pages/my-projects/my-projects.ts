import { Component } from '@angular/core';
import { ObjectList } from '../../components/object-list/object-list';

@Component({
  selector: 'app-my-projects',
  imports: [ObjectList],
  templateUrl: './my-projects.html',
})
export default class MyProjects {}
