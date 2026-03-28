import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-introduce',
  imports: [Navbar, RouterOutlet],
  templateUrl: './introduce.html',
  styleUrl: './style.css',
})
export default class Introduce {}
