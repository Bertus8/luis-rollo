import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../../models/home'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    public gallery !: Gallery;
  constructor() {
    this.gallery = {
      title: "Galeria de obras de Luis Rollo",
      gallery:[ 
        {
          src: "https://www.luisroyo.com/gallery_content/Luis-Royo-Laberinto_Gris_art-illustration-shop-sale-Title_Stars_of_Heat-1995-Book_Secrets-fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis_Royo-The_dark_Visit-Year_2006-art-Laberinto%20Gris-Book_Dark_Labyrinth-fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis_Royo-Dragon_Blade-Year_2004-Laberinto%20Gris-Book_Dark_Labyrinth-fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis_Royo-Laberinto_Gris_Art-Title_La_sonrisa_de_Qi-2008-Book_Dead_Moon-Oriental-Fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis_Royo-Laberinto_Gris_Art-La_puerta_de_la_Bestia_Primitiva-2008-Book_Dead_moon-Painting-Fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis_Royo-Title_Horizonte_Rojo-2009-Laberinto%20Gris-Book_Dead_Moon-Oriental-Warrior-Fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Pag_86_87-Laberinto_Gris-Luis_Royo-El_Vuelo-2008-Dead_Moon-Fantasy-Oriental.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis_Royo-Laberinto_Gris_Art-Title_Pesado_destino-2009-Book_Dead_Moon-Fantasy-Oriental-Painting.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Luis-Royo-Laberinto_Gris_Art-gallery-illustration-sale-Title_Fissures_of_the_Breeze-1995-Book_Secrets-fantasy.jpg",
          alt: ""
        },
        {
          src: "https://www.luisroyo.com/gallery_content/Laberinto_Gris_Art-gallery-Norma-Luis_Royo-Title_Panic_Light-Year_1994-Book_Malefic_New_Remastered-pag_29-Fantasy.jpg",
          alt: ""
        },
      ]
    }
   }

  ngOnInit(): void {
  }

}
