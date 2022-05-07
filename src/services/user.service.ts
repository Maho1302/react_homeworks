import {AxiosResponse} from "axios";
import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

type Res<T> = Promise<AxiosResponse<T>>

const userService = {
    getAll:():Res<IUser[]> => axiosService.get(urls.users)
}

export {
    userService
}