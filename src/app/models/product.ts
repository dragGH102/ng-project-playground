// this could also have been `export class Product implements iProduct`
// if we had good reasons to have multiple Product classes instead of one with 'type attribute'
// e.g. in case each product was actually specialized, with their own attributes and methods

export class Product {
  nameWithDescription?: string;

  // Note: we never instantiate a product manually in this app
  // so this could have well been an interface without a constructor
  constructor(public name: string, public price: number, public description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.nameWithDescription = `${name}-${description}`;
  }
}
