export function models(): string {
  return 'models';
}

export interface Pokemon {
  id: number;
  name: string;
  type: PokeType;
  level: number;
}

export type PokeType = 'fire' | 'water' | 'mind' | 'earth';
