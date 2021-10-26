import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre= "Cesar";
  apellido= "Abadia";
  edad=42;
//empresa="soluciones";

llamaEmpresa(value:String){
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
