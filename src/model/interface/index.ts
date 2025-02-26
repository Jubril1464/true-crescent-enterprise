export interface CardSteelsProps {
  name: string;
  image: string;
  id: number;
}

export interface ProductDetails {
  name: string;
  image: string;
  id: number;
  details: {
    length?: string,
    sizes?: string,
    wallThickness?: string,
    thickness?:string,
    about?: string,
    product?: string
    surface?: string,
    standard?: string,
    certificate?: string
  }
}