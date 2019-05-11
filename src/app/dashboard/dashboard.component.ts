import { Component, OnInit } from '@angular/core';
import { Friend } from '../shared/models';
import { summerFriends } from '../shared/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  friends:Array<Friend>;
  title = 'summerfriends';

  constructor() {
    this.friends = summerFriends
   }

  ngOnInit() {
  }

}
