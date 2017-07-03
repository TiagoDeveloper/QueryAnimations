import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  private user: string = 'tiagoDeveloper';
  private client_id: string = 'cfc22c1c8b39f8ef2e23';
  private client_secret: string = '6de035546dd804fd7e3f2cc4e04165a02c3ddd3f';

  private url: string = `https://api.github.com/users/${ this.user }?client_id=${ this.client_id }&client_secret=${ this.client_secret }`;

  constructor( private http: Http ) { }

  getPerfil() {
    return this.http.get(this.url)
    .map(r => r.json() || {} );
  }

}
