import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { GenerarNombreYApellidoComponent } from './componentes/generar-nombre-y-apellido/generar-nombre-y-apellido.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "tuberias", component:TuberiasComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "generar-nombre-y-apellido/:nombre/:apellido", component:GenerarNombreYApellidoComponent},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
