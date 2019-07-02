import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page=4;
  title = 'directive';
    details:any= [
      {
      image:"http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
      name: "Nila",
      email: "nila@gmail.com",
      address: "Cuddalore",
      phone: "9876543210",
      },

      {
      image: "http://vacutec.co.za/Pro/wp-content/uploads/2014/02/face.jpg",
      name: "Kavi",
      email: "kavi@gmail.com",
      address: "Chennai",
      phone: "9874546254",
      },

      {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFVEes7fhW3S_N3mvxCg8xeX2-fi_qolNS8g-4qqDJUZf5VZGVQ',
      name: "Barath",
      email: "barath@gmail.com",
      address: "Pondy",
      phone: "9873481378",
      },
        
    ];

     



change(value){
 this.page=value;
}
 
}
