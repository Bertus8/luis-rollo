import { Component, OnInit } from '@angular/core';
import { Header } from '../../../models/home'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public header: Header;

  constructor() {
    this.header = {
      title:"Luis Rollo",
      image: {
        src: "../../../assets/images/luis.jpg",
        alt: "Luis rollo en el estudio",
      },
      created:"Bertus",
    }
   }

  ngOnInit(): void {
  }

}
