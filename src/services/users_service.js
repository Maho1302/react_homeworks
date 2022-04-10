import  {axiosService} from './axios_service';
import {urls} from '../constants';

export  const usersService = {
    getAll: () => axiosService(urls.users)
}