import { makeAutoObservable } from 'mobx';
import { fetchCharacterInfo } from './';
import { CharacterInfoParams, InfoParams } from './types';

class CharacterInfo implements CharacterInfoParams {
  info: any;

  addInfo = (info: InfoParams) => {
    this.info = info;
  }

  getInfo = (id: string) => fetchCharacterInfo(this.addInfo, id);

  constructor() {
    makeAutoObservable(this);
  }
}

export const characterInfoStore = new CharacterInfo()