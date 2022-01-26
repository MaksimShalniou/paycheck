import { makeAutoObservable } from 'mobx';
import { fetchCharacterInfo } from './api';
import { CharacterInfoParams, InfoParams } from './types';

export class CharacterInfo implements CharacterInfoParams {
  info = {};

  addInfo = (info: InfoParams) => {
    this.info = info;
  }

  getInfo = (id: string) => fetchCharacterInfo(this.addInfo, id);

  constructor() {
    makeAutoObservable(this);
  }
}