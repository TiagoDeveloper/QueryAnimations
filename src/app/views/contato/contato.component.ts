import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, stagger, style, animate } from '@angular/animations';
import { navegacao } from '../../triggers';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  animations: navegacao,
  host: {'[@entra]': 'true'}
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
