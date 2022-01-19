import { Component, OnInit } from '@angular/core';
import { Main } from '../../../models/home';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public main: Main[];
  public isColor:boolean = false;
  constructor() { 
    this.main = [
      {
        title: 'PROJECTS: GODDESSES & CUSTOM MADE',
        text: 'Projects se divide en dos libros con una clara diferencia. El primero Goddesses, reúne imágenes concebidas para pasear libremente por los eternos sueños del autor en torno a la fantasía y el mundo femenino, mientras que el segundo Custom Made, recoge trabajos concretos hechos para llevar a cabo un proyecto o ser portada de un producto o de un libro. El camino libre de estas páginas lo inunda la figura femenina. La protagonista, la “diosa”. En toda su trayectoria es una constante. Una imagen repetida en busca del ideal, en busca de esa diosa madre perdida en el tiempo.',
        image: {
          src: "https://www.luisroyo.com/assets/img/books/COFRE%20PROJECTS%20-%20LUIS%20ROYO.jpg",
          alt: ""
        }
      },
      {
        title: 'MALEFIC TIME: AKELARRE',
        text: 'Última entrega de la trilogía Malefic Time. Trece mujeres semidesnudas entonan un cántico en un idioma antiguo, en recuerdo de las trece brujas sacrificadas en el pasado. Una figura de gran tamaño aparece tras ellas, acompañada por acordes de flauta diula, y con el rostro oculto por una máscara de “gran carnero”. En las principales ciudades de Europa, las gentes salen de sus casas para refugiarse en torno a los cascos históricos, lo que da la sensación de un retorno al Medievo.',
        image: {
          src: "https://www.luisroyo.com/assets/img/books/akelarre/1.jpg",
          alt: ""
        }
      },
      {
        title: 'EL DRAGÓN DE HIELO',
        text: 'El Dragón de Hielo Todos en la aldea coinciden: Adara es una niña rara, una niña del invierno. Nació durante la peor helada que se recuerda, y el frío se quedó para siempre con ella. Es fácil verla pasear sola por los campos helados o construir imaginarios castillos de arena y hielo… George R. R. Martin, mundialmente conocido por su saga de literatura fantástica Juego de tronos, une su talento al de Luis Royo y nos ofrece un conmovedor relato para todas las edades que muestra cómo una amistad puede con todas las barreras.',
        image: {
          src: "https://www.luisroyo.com/assets/img/books/icedragon/1.jpg",
          alt: ""
        }
      },
      {
        title: 'MALEFIC TIME: 110 KATANAS',
        text: 'Malefic Time: 110 Katanas es la segunda entrega del universo Malefic Time. El silencio se ha instalado como una losa aplastante en las calles de Tokio, pero sus edificios siguen en pie. Una figura encapuchada camina por el centro de una de esas estrechas calles de descoloridos neones. Los viejos distritos se han vuelto hermeticos. Cada uno de ellos tiene sus propias reglas. Criaturas que se creía de leyenda y fantasía habitan las calles que no son más que callejones siniestros y peligrosos.',
        image: {
          src: "https://www.luisroyo.com/assets/img/books/katanas/1.jpg",
          alt: ""
        }
      },
      {
        title: 'MALEFIC TIME: APOCALYPSE',
        text: 'Malefic Time: Apocalypse es la primera entrega del proyecto conjunto de Luis y Romulo Royo. Ambientada en el 2038 ilustra la transformación del mundo tal como lo conocemos a una autentica pesadilla. Ironicamente Nueva York sigue siendo el emblema del mundo, una metropoli diezmada de sus habitantes, decrépita y ruinosa. En el corazón de este fatal escenario: Luz, su espada Malefic y muchas preguntas es involucrada en una batalla final de los nuevos pobladores, seres imposibles de definir que infectan la ciudad.',
        image: {
          src: "https://www.luisroyo.com/assets/img/books/apocalypse/1.jpg",
          alt: ""
        }
      },
      {
        title: 'PROHIBITED BOOK - NEW REMASTERED EDITION',
        text: 'La nueva edición que recupera las obras clásicas del autor, recopila en esta ocasión los tres volúmenes que Royo dedicó al arte del erotismo: la serie Prohibited, junto con los bocetos que publicó en Prohibited Sketchbook. El libro contiene más de un centenar de ilustraciones remasterizadas, además de otras inéditas.',
        image: {
          src: "https://www.luisroyo.com/assets/img/books/prohibitednr/1.jpg",
          alt: ""
        }
      },
    ]
  }

  ngOnInit(): void {}

  public changeColor () {
    this.isColor = !this.isColor;
  }

}
