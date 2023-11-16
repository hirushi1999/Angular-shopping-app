export class Item {

  constructor(public code: string,
              public image: string,
              public title: string,
              public rating: number,
              public price: number,
              public qty: number,
              public description?: string) {
  }
}

