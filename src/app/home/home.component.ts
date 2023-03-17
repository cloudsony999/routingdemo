import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uname="AMITAVA IN UPPERCASE"
  lname="amitava in lowercase"
  d1=new Date(2022,6,25)
  d2=new Date(2022,6,25,15,32,41)
  amt:number=7654378.569


}
