import { $api_lang } from "./api";

export class LexiconService {
    static getLexic(lang: string){
       return $api_lang.get(`/lexic?service=Shorts&lang=${lang}`); 
    }
}