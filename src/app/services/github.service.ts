import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  private user: string = 'tiagoDeveloper';
  private client_id: string = 'xxxxxxxxxx';
  private client_secret: string = 'xxxxxxxxxxxxxxxx';

  private url: string = `https://api.github.com/users/${ this.user }?client_id=${ this.client_id }&client_secret=${ this.client_secret }`;

  constructor( private http: Http ) { }

  getPerfil() {
    return this.http.get(this.url)
    .map(r => r.json() || {} );
  }

}
