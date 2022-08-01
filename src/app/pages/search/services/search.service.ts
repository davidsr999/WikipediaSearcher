import { HttpClient } from "@angular/common/http";
import { Injectable, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import {pluck} from "rxjs/operators"
import { environment } from "src/environments/environment";

interface WikipediaResponse {
    query: {
        search: Article[]
    }
}


export interface Article {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: Date;
}

@Injectable({providedIn: 'root'})
export class SearchService {
    constructor(private readonly http: HttpClient) {}

    search(term: string): Observable<any> {
        // &srsearch=Craig%20Noone
        // const params = {
        //     action: 'query',
        //     format: 'json',
        //     list: 'search',
        //     srsearch: term,
        //     utf8: '1',
        //     origin: '*'
        // }
        return this.http.get<WikipediaResponse>(environment.api, {
            params: {
                action: 'query',
                format: 'json',
                list: 'search',
                srsearch: term,
                origin: '*',
                srlimit: 10
            }
        }).pipe(
            pluck('query', 'search')
        )
    }
}