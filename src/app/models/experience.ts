export class Experience {
  id: number;
  an: string;
  ancre: string;
  site: string;
  titre: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;

  constructor(id: number = null, an: string = null, ancre: string = null, site: string = null,
              titre: string = null, description1: string = null, description2: string = null,
              description3: string = null, description4: string = null)
  {
    this.id = id;
    this.an = an;
    this.ancre = ancre;
    this.site = site;
    this.titre = titre;
    this.description1 = description1;
    this.description2 = description2;
    this.description3 = description3;
    this.description4 = description4;
  }
}
