import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable: String = "texto de prueba"
  numero1: number = 0
  numero2: number = 0
  letras = ["a","b","c"]
  usuarios = [
    {nombre:"Jaime",apellido:"Abad"},
    {nombre:"Javier",apellido:"Bueno"},
    {nombre:"Manuel",apellido:"Palomino"}
  ]
  usuarioSel
  selUser(usuario){
    this.usuarioSel = usuario;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
