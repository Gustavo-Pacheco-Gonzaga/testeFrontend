import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //imagens 
  basePath = './assets/';
  imgBackground = this.basePath + 'background.png';
  imgUsuario = this.basePath + 'person.png';
  imgFiltro = this.basePath + 'filtro.png';
  imgBuscar = this.basePath + 'busca.png';
  imgCarro1 = this.basePath + 'Carros/Imagem15.png';
  imgCarro2 = this.basePath + 'Carros/Imagem16.png';
  imgQrcode = this.basePath + 'qrcode.png';

  formBuscar: any;
  error: any;

  filtro = 0;

  jsonCarros = require('../../assets/carros.json');

  type: string[] = [];
  engine: string[] = [];
  size: string[] = [];

  buscarContent = 0
  typeContent = 1;
  engineContent = 1;
  sizeContent = 1;

  arrayFiltro = [
    this.type,
    this.engine,
    this.size
  ]
  resultado : any[] = [];

  constructor(
    public fb: FormBuilder,
    public r: Router
  ) { }

  ngOnInit() {
    this.formBuscar = this.fb.group({
      buscar: ['', Validators.required]
    });
  }

  openFiltrar() {
    this.filtro = 1
    this.resultado = [];
  }

  changeValue(tipo: string, value: string) {
    if (tipo == 'type') {
      if (this.type.includes(value)) {
        for (let i = 0; i < this.type.length; i++) {
          if (this.type[i] == value) {
            this.type.splice(i, 1);
          }
        };
      } else {
        this.type.push(value)
      }
    }
    if (tipo == 'engine') {
      if (this.engine.includes(value)) {
        for (let i = 0; i < this.engine.length; i++) {
          if (this.engine[i] == value) {
            this.engine.splice(i, 1);
          }
        };
      } else {
        this.engine.push(value)
      }
    }
    if (tipo == 'size') {
      if (this.size.includes(value)) {
        for (let i = 0; i < this.size.length; i++) {
          if (this.size[i] == value) {
            this.size.splice(i, 1);
          }
        };
      } else {
        this.size.push(value)
      }
    }
  }

  hideContent(value: any) {
    if (value == 'buscar') {
      this.buscarContent = 1;
    }
    if (value == 'type') {
      if (this.typeContent == 1) {
        this.typeContent = 0;
      } else {
        this.typeContent = 1;
      }
    }
    if (value == 'engine') {
      if (this.engineContent == 1) {
        this.engineContent = 0;
      } else {
        this.engineContent = 1;
      }
    }
    if (value == 'size') {
      if (this.sizeContent == 1) {
        this.sizeContent = 0;
      } else {
        this.sizeContent = 1;
      }
    }
  }

  aplicarFiltro() {
    let bom = false;

    for (let i = 0; i < this.jsonCarros.length; i++) {
      for (let j = 0; j < this.arrayFiltro.length; j++) {
        if (this.jsonCarros[i].type == this.arrayFiltro[0][j] || this.arrayFiltro[0].length == 0) {
          if (this.jsonCarros[i].engine == this.arrayFiltro[1][j] || this.arrayFiltro[1].length == 0) {
            if (this.jsonCarros[i].size == this.arrayFiltro[2][j] || this.arrayFiltro[2].length == 0) {
              bom = true;
            }
          }
        }
      }
      if(bom == true){
        this.resultado.push(this.jsonCarros[i]);
      }
    }

    this.filtro = 0;
    
    console.log(this.resultado);
  }

}
