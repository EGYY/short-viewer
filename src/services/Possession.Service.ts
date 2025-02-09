import { instance } from "./api";

export class PossessionService {
    static getPossession(id: number){
       return instance.get(`/shorts/possession_data/${id}`); 
    }
}