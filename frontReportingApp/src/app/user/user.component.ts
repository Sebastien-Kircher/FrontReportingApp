import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() id : Float32Array;
  @Input() firstName  : string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() tel: string;
  @Input() index: number;

  usr: Array<any>;


  constructor(private userService: UserService) { }

  ngOnInit() {

  }

}
