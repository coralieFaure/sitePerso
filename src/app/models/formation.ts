export class Formation {
  id: number;
  an: string;
  titre: string;
  titre2: string;
  description1: string;
  description2: string;
  ancre: string;
  site: string;

  constructor(id: number = null, an: string = null, titre: string = null, titre2: string = null,
              description1: string = null, description2: string = null, ancre: string = null,
              site: string = null) {
    this.id = id;
    this.an = an;
    this.titre = titre;
    this.titre2 = titre2;
    this.description1 = description1;
    this.description2 = description2;
    this.ancre = ancre;
    this.site = site;
  }
}
