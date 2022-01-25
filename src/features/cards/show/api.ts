import { fetchData, HTTP_METHODS } from '../../../shared/api';
import { CardParams } from './model';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCards = (successCallbackFn: (cards: Array<CardParams>) => void) => fetchData(API_URL, HTTP_METHODS.GET)
    .then(({ results }: never) => successCallbackFn(results));