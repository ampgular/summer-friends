import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Friend } from '../shared/models';
import { summerFriends } from '../shared/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  friends:Array<Friend>
  currentFriend:Friend;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
  ) {
    this.friends = summerFriends
   }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      const currentFriendArray = this.friends.filter(friend=> friend.id == params['id'])

      if (currentFriendArray.length==1){
        this.currentFriend = currentFriendArray[0]
      }
      else {
        this.router.navigate(['/not-found']);
      }

    })

  }

}
