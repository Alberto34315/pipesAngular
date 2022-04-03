import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayusculas: boolean = true
  ordenarPor: string = ""
  constructor() { }
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      volar: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      volar: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      volar: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      volar: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      volar: true,
      color: Color.verde
    }
  ]
  ngOnInit(): void {
  }
  cambiar() {
    this.enMayusculas = !this.enMayusculas
  }
  cambiarOrden(valor: string) {
    this.ordenarPor=valor
  }
}
