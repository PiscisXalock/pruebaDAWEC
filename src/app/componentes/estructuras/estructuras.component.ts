import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {

  verdad: boolean = false;
  edad: number;

  constructor() { }

  ngOnInit(): void {
  }

  muestraLog(indice, impar, primero, ultimo, cuenta) {
    
    console.log(indice);
    console.log(impar? "impar" : "par");
    if(primero) console.log ("Primer elemento del array");
    if(ultimo) console.log ("Último elemento del array");
    console.log(cuenta);
    
  }

}
