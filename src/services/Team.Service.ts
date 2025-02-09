import { instance } from "./api";

export class TeamService {
    static getTeam(id: number){
       return instance.get(`/shorts/teams_params/${id}`); 
    }
}