import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  daryaForm:FormGroup;

  constructor(private dk: FormBuilder) {}
  
  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.daryaForm = this.dk.group({
      email: ['', [Validators.required, Validators.email]],
      first: ['', Validators.required],
      last: ['', Validators.required]
    });

  }

  submitform()
  {
    console.log('see form value',this.daryaForm.value);
    console.log('if form is valid',this.daryaForm.valid);
  }
}
