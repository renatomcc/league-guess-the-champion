import { Home } from './src/screens/Home';


export default function App() {
  return (
    <Home/>
  );
}

export interface IChampionImages {
  full: string;
  sprite: string;
}

export interface IChampion {
  id: string;
  name: string;
  image: IChampionImages;
  roles: string[];
  tags: string[];
  genre: string;
  specie: string[];
  resource: string;
  range_type: string[];
  regions: string[];
  release_year: number;
}
