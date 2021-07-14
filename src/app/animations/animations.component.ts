import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations:[
    trigger('openclose',[
      state('open',style({
        height:'200px',
        backgroundColor:'yellow',
        opacity:1
      })),

      state('closed',style({
        height:'100px',
        backgroundColor:'green',
        opacity:.3
      })),

      transition('open =>closed',[
        animate('1s')
      ]),
      transition('closed =>open',[
        animate('2s')
      ])

    ])
  ]
})

export class AnimationsComponent implements OnInit {
public isOpen=false;
  constructor() { }

  ngOnInit(): void {
  }

  trigger=()=>{
    this.isOpen=!this.isOpen;
  }

}
