import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  templateUrl: './shell.html',
  styleUrl: './shell.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class Shell {}
