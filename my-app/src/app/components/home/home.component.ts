import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  products = [
    {
      name: "Masajes Corporal",
      price: "$80.000",
      
    },
    {
      name: "Limpieza Facial",
      price: "$200.000"
    },
    {
      name: "Tratamientos Celulitis",
      price: "$800.000"
    },
    {
      name: "Manicure SPA",
      price: "$3.000.000"
    },
    {
      name: "Pedicure SPA",
      price: "$8.000.000"
    },
    {
      name: "Areglo de novias",
      price: "$1.800.000"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
