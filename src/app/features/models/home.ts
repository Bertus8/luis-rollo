import {Image} from '../../shared/models/shared';

 export interface Header {
     title: string;
     image: Image;
     created: string;
 }

 export interface Hero {
     description: string;
     image: Image;
 }

 export interface Main {
     title: string;
     text: string;
     image: Image;
 }

 export interface Gallery {
    title: string; 
    gallery: Image[];
 }