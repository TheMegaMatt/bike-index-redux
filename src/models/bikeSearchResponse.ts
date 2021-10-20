import {Bike} from "./bike";

export interface BikeSearchResponse {
    bikes: Bike[]
}

export interface BikeSearchRequest {
    page?: number;
    per_page?: number;
    location?: string;
    distance?: string;
    stolenness?: "all" | "non" | "stolen" | "proximity";
    query?: string;
}

export interface BikeCountRequest {
    location?: string;
    distance?: string;
    stolenness?: "all" | "non" | "stolen" | "proximity";
    query?: string;
}