import axios from 'axios';

export const fetchData = (url: string): any => {
    return axios.get(url).then(({ data }) => {
        return data;
    })
};