import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

alumnos = [{ nombre: "Juan", apellido: "Perez", legajo: 12345, carrera :"civil" }, { nombre: "Pedro", apellido: "Gonzalez", legajo: 12346 ,carrera :"sistemas"}, { nombre: "Maria", apellido: "Lopez", legajo: 12347 ,carrera :"civil"}];	
colorRojo: boolean = false;
colorAzul: boolean = false;
cambiarColor() {
    
  this.colorRojo = !this.colorRojo;
  this.colorAzul = !this.colorAzul;
}

fecha = new Date(1994, 3, 15);

}
