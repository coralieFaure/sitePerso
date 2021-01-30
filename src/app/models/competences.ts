export class Competences {
  id: number;
  img: string;
  alt: string;

  constructor(id: number = null, img: string = null, alt: string = null) {
    this.id = id;
    this.img = img;
    this.alt = alt;
  }
}
