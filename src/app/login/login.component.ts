import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any;
  erro: any;

  constructor(
    public as: AppService,
    public fb: FormBuilder,
    public r: Router
  ) { }

  ngOnInit(){
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  Login(){
    return this.r.navigate(['/inicio']);
  }

}
