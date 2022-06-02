import { Component, OnInit } from '@angular/core';
import { PYTANIA } from 'src/pytaniaRepo';
import { Pytanie } from 'src/pytanie';

@Component({
  selector: 'app-pytanie',
  templateUrl: './pytanie.component.html',
  styleUrls: ['./pytanie.component.css']
})
export class PytanieComponent implements OnInit {
  pytania:Pytanie[] = PYTANIA;
  i:number =0;
  constructor() { }

  ngOnInit(): void {
  }
sprawdz():void{
  console.log(this.pytania[0].udzielona);
  this.i++;
}
}
