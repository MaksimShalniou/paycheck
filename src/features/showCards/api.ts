import { fetchData, HTTP_METHODS } from '../../shared/api';
import { API_URL } from '../../shared/api/config';
import { CardParams } from './';

export const fetchCards = (successCallbackFn: (cards: Array<CardParams>) => void) => fetchData(API_URL, HTTP_METHODS.GET)
    .then(({ results }: never) => successCallbackFn(results));