import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-custom',
  templateUrl: './popover-custom.component.html',
  styleUrls: ['./popover-custom.component.scss'],
})
export class PopoverCustomComponent  implements OnInit {

  @Input() tipo_popover!:string;

  constructor() { }

  ngOnInit() {}

}
