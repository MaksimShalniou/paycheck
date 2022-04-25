import { action, makeAutoObservable } from 'mobx';
import axios from 'axios';
import { Method } from 'axios';

interface IFetchData {
  fetch: () => void;
  withMethod: any;
  data: any;
  state: string;
  options: any;
  requestUrl: string;
  baseUrl: string;
}

export class FetchData implements IFetchData {
  baseUrl = 'https://catfact.ninja';
  requestUrl = 'fact';
  data: any;
  state = 'pending';
  options: any = {};

  constructor() {
    makeAutoObservable(this);
  }

  fetch() {
    this.state = 'pending';
    return axios({
      method: this.options?.method,
      url: `${this.baseUrl}/${this.requestUrl}`,
      data: this.options?.data
    })
      .then(
        action('fetchSuccess', ({ data }: any) => {
          console.log('11111', data);
          this.data = data;
          this.state = 'done';
        })
      )
      .catch(
        action('fetchError', (error: any) => {
          this.data = error;
          this.state = 'error';
        })
      );
  }

  withMethod(method: Method) {
    this.options.method = method;
    return this;
  }
}
