import { Component } from '@angular/core';
import { PersonasRespose } from 'src/app/shared/services/models/PersonajesResponse';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
  providers: [DatePipe],
})
export class PersonajesComponent {
  results: PersonasRespose;

  constructor(private srvPersonajes: PersonajesService) {}

  ngOnInit() {
    this.srvPersonajes.getPersonajes().subscribe((result) => {
      console.log(result);
      this.results = result;
    });
  }
}
