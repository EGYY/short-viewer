import { instance } from "./api";

export class PlayerService {
    static getPlayer(id: number){
       return instance.get(`/shorts/players_params/${id}`); 
    }
}