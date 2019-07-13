import { EmpleadosService } from './empleados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  listaEmpleados = [];

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit() {
    this.listarEmpleados();
  }

  listarEmpleados() {
    this.listaEmpleados = [];

    this.empleadoService.listarEmpleados().subscribe(
      (response: any) => {
        this.listaEmpleados = response.data;
    });
  }
}

