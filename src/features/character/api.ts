import { fetchData, HTTP_METHODS } from '../../shared/api';
import { API_URL } from '../../shared/api/config';
import { InfoParams } from './types';

export const fetchCharacterInfo = (
  successCallbackFn: (info: InfoParams) => void, 
  id: string
) => {
  fetchData(`${API_URL}/${id}`, HTTP_METHODS.GET).then((results: InfoParams) => {
    successCallbackFn(results)
  })
};