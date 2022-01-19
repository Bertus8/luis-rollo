import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/home'


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: Hero;

  constructor() { 
    this.hero = {
      description: "Nace en 1954 Olalla, Teruel (España). Comenzó a exponer sus pinturas a partir de 1972 y a publicar su trabajo de comic en revistas como 1984, Rambla, el Víbora y Heavy Metal en 1980. En 1983 se vuelca en la ilustración, donde cosechará sus mayores éxitos y desde entonces, publicará sus obras a nivel internacional. Entre otros países, realiza trabajos para Estados Unidos, Alemania, Reino Unido... así como portadas para libros de las más prestigiosas editoriales, Tor Book, Berkley Books, Avon, Warner Books, Batman Books y otras. Las revistas recurren con frecuencia al arte de Luis Royo para ilustrar sus portadas. A revistas estadounidenses como Heavy Metal o National Lampoon se unen revistas europeas como Cimoc, Cómic Art, Ere Comprime, Total Metal y otras. Estos no serán sus únicos trabajos en estos años, también comienza a realizar carátulas de videos y videojuegos que se han convertido en míticos, como Game Over, Turbo Girl o Navy Moves.A partir de 1990 y una vez consolidado en una posición de privilegio en el mercado de la ilustración internacional, ampliará su producción de obra de autor. La mayor parte de esta obra será publicada en diferentes medios y soportes, así como en libros propios de autor, Prohibited, Subversive Beauty, Secrets o Fantastic Art, se encuentran entre sus más de veinte títulos de libros personales.En su larga trayectoria ha realizado exposiciones de su obra en ferias y galerías de arte de Francia, España, Bélgica, Alemania, Rusia y Estados Unidos.",
      image: {
        src: '../../../assets/images/hero.jpg',
        alt: ''
      }
    }
  }

  ngOnInit(): void {}

  public mouseOn() {
    this.hero.description = 'Luis Royo nace en 1954 en Olalla, un pueblecito de Teruel (España). Cursa estudios de Delineación, Pintura, Decoración e Interiorismo. A partir de 1972 empieza a pintar y expone en diversos foros. En 1979 inicia su andadura como dibujante de cómic publicando en las revistas del momento. En 1983 pasa a basar su obra en la ilustración y no tarda en triunfar internacionalmente. Es donde cosechará sus mayores éxitos. Lo hace de la mano de la agencia y Editorial Norma, que distribuye su obra por todo el mundo. A partir de 1992 aparece su primer libro, Women, al que siguen Malefic, Secrets, III Millennium, Dreams, la trilogía Prohibited Book, Evolution, trilogía Conceptions I, Visions, Fantastic Art, Subversibe Beauty, etc. A estos títulos hay que añadir la publicación de series de cartas para coleccionistas, portafolios, pósteres y cartas de tarot. La creciente popularidad de sus imágenes hace que éstas puedan contemplarse también en postales, calendarios, juegos de cartas, camisetas, carátulas de discos, videojuegos, alfombrillas de ordenador, esculturas etc. A partir de 2004 comienza a trabajar en libros acompañados de sus estudios o sus propias historias, transformando su carrera de ilustrador en autor multidisciplinar con libros como The labyrinh Tarot, Dome, Dark Labyrinth, Dead Moon, Dead Moon Epilogue o el extenso proyecto multimedia Malefic Time.',
    this.hero.image = {
      src: '../../../assets/images/hero1.jpg',
      alt: ''
    }   
  }

  public mouseOut() {
    this.hero.description ="Nace en 1954 Olalla, Teruel (España). Comenzó a exponer sus pinturas a partir de 1972 y a publicar su trabajo de comic en revistas como 1984, Rambla, el Víbora y Heavy Metal en 1980. En 1983 se vuelca en la ilustración, donde cosechará sus mayores éxitos y desde entonces, publicará sus obras a nivel internacional. Entre otros países, realiza trabajos para Estados Unidos, Alemania, Reino Unido... así como portadas para libros de las más prestigiosas editoriales, Tor Book, Berkley Books, Avon, Warner Books, Batman Books y otras. Las revistas recurren con frecuencia al arte de Luis Royo para ilustrar sus portadas. A revistas estadounidenses como Heavy Metal o National Lampoon se unen revistas europeas como Cimoc, Cómic Art, Ere Comprime, Total Metal y otras. Estos no serán sus únicos trabajos en estos años, también comienza a realizar carátulas de videos y videojuegos que se han convertido en míticos, como Game Over, Turbo Girl o Navy Moves.A partir de 1990 y una vez consolidado en una posición de privilegio en el mercado de la ilustración internacional, ampliará su producción de obra de autor. La mayor parte de esta obra será publicada en diferentes medios y soportes, así como en libros propios de autor, Prohibited, Subversive Beauty, Secrets o Fantastic Art, se encuentran entre sus más de veinte títulos de libros personales.En su larga trayectoria ha realizado exposiciones de su obra en ferias y galerías de arte de Francia, España, Bélgica, Alemania, Rusia y Estados Unidos.",
    this.hero.image = {
      src: '../../../assets/images/hero.jpg',
      alt: ''
    }
  }
}
