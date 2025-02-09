import { instance } from "./api";

export class MatchService {
    static getMatch(id: number){
       return instance.get(`/shorts/match_data/${id}`); 
    }
}