import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/router';
import { Observable } from 'rxjs/Observable';
import { GithubService } from './services/github.service';

@Injectable()
export class PrincipalResolver implements Resolve<any> {

    constructor( private github: GithubService ) {}

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.github.getPerfil();
    }
}
