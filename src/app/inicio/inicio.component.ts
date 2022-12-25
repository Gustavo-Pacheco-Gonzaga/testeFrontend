import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formBuscar: any;
  error: any

  constructor(
    public fb: FormBuilder,
    public r: Router
  ) { }

  ngOnInit() {
    this.formBuscar = this.fb.group({
      buscar: ['', Validators.required]
    })
  }

  openFiltrar(){

  }

  buscar(){
    
  }

}
