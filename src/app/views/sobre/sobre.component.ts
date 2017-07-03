import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, stagger, style, animate } from '@angular/animations';
import { navegacao } from '../../triggers';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
  animations: navegacao,
  host: {'[@entra]': 'true'}
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
