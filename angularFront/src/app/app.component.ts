import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFront';
  ocultar = true;
  resultadoDataBindingEvent = "";
  cosasQueMeGustan = ['Sushi', 'Sancocho', 'Marihuana']

  changeH4(){
    this.resultadoDataBindingEvent = "Me cambiaron por evento!"
  }
}
