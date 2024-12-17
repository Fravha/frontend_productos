import { Component } from '@angular/core';

@Component({
  selector: 'app-acercade',
  standalone: false,
  
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css'
})
export class AcercadeComponent {
  teamMembers = [
    {
      name: 'Francisco Bailaba',
      role: 'Desarrollador Junior',
      bio: 'Estudiante de Ingieneria en Sistemas de UPDS Sede Santa Cruz.',
      image: 'images/perfilFB.jpeg',
      linkedin: 'https://www.linkedin.com/in/francisco-bailaba-629384257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Fravha'
    }
  ];
}