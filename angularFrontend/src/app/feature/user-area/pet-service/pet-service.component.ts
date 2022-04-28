import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { Register } from 'src/app/core/services/service-register.service';
import { GetRegisterServices } from 'src/app/shared/models/register-service';

@Component({
  selector: 'app-pet-service',
  templateUrl: './pet-service.component.html',
  styleUrls: ['./pet-service.component.css']
})
export class PetServiceComponent implements OnInit {

  isTextField!: boolean;
  user: User;

  formServiceRegister: FormGroup = new FormGroup ({
    name: new FormControl('',[Validators.required]),
    descrition: new FormControl('',[Validators.required]),
    cost:  new FormControl('',[Validators.required]),
  });

  servicesList: GetRegisterServices[] = [];

  constructor(
    private readonly serviceRegister: Register,
    private readonly router : Router,
    private readonly AlertModalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getServiceList()
  }

  getServiceList(){
    this.serviceRegister.getServices().subscribe({
      next: (servicesList) => {
        this.servicesList = servicesList;
        console.log("Deu bom");
      },
      error: (error) => {
        console.log("Erro ao listar", error)
      }
    })
  }

  chooseService(service: GetRegisterServices){
    service.chosen = true;
  }

  redirect() {
    this.router.navigate(['/user-area/home-user']);
  }

}
