export interface IMatch {
    id:        number;
    status:    null;
    date:      Date;
    season:    Season;
    home_team: Team;
    away_team: Team;
}

export interface Team {
    id:           number;
    name:         string;
    logo:         null;
    color:        null;
    color_number: null;
    score:        number;
}

export interface Season {
    id:          number;
    title:       string;
    year_season: string;
}
