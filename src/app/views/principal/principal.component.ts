import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../../services/github.service';
import { Subscription } from 'rxjs/Subscription';
import { navegacao } from './../../triggers';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: navegacao,
  host: {'[@entra]': 'true'}
})
export class PrincipalComponent implements OnInit {

  avatar: string = '';
  inscricao: Subscription;

  constructor( 
    private github: GithubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (imagem: { github: { avatar_url: '' } }) => {
        this.avatar = imagem.github.avatar_url;
    });

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
