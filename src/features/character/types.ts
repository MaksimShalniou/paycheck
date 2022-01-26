export interface InfoParams {
  id: number;
  created: string;
  episode: Array<string>;
  gender: string;
  image: string;
  location: any;
  name: string;
  origin: any;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharacterInfoParams {
  info: InfoParams | object;
  addInfo: (info: InfoParams) => void;
  getInfo: (id: string) => void
}

export interface CharacterProps {
  characterInfoStore?: CharacterInfoParams
}