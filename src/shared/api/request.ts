import axios from 'axios';
import { HTTP_METHODS } from './config';

export const fetchData = (url: string, method: string = HTTP_METHODS.GET, body?: object): any => {
    let response;

    switch (method) {
        case HTTP_METHODS.POST: {
            response = axios.post(url, body);
            break;
        }

        default: response = axios.get(url);
    }
    return response.then(({ data }) => data).catch(() => alert('Error'));
};