import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment = ['habitat drone', 'drones', 'food containers', 'oxygen tanks'];

  constructor() { }

  ngOnInit(): void {
  }

}
