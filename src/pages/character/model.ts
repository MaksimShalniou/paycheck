import { makeAutoObservable } from 'mobx';

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
  info: InfoParams;
  addInfo: (info: InfoParams) => void;
}

export class CharacterInfo implements CharacterInfoParams {
  info: any = null;

  addInfo = (info: any) => {
    this.info = info;
  }

  constructor() {
    makeAutoObservable(this);
  }
}