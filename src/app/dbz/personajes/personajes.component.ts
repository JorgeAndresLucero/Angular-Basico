import { Component, Input} from '@angular/core';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@Input('data')
  //personajes: any[] = [];
  get personajes(){
    return this.DbzService.personajes;
  }

  constructor(private DbzService: DbzService) {

  }
}
