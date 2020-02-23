import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;


  constructor(private appareilService: AppareilService) { }

  ngOnInit() {

  }
  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
}



}
