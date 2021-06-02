export interface StarWarsCharacter {
  name: string;
  gender: string;
  height: string;
}

export interface StarWarsPage {
  count: number;
  next: string;
  previous: string;
  results: StarWarsCharacter[];
}
