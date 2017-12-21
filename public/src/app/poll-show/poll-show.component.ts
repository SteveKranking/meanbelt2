import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Router } from '@angular/router';
import { Poll } from '../poll';
import { OptionService } from '../option.service';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit {
  poll: Poll = new Poll();
  currentUser: User;
  poll_id: string;

  constructor(
    private _userService: UserService,
    private _pollService: PollService,
    private _optionService: OptionService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params=> this.poll_id = params.id);
    console.log(this.poll_id);
    console.log('hello')
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        this.getPoll();
      }

    });
  }

  getPoll(){
    this._pollService.show(this.poll_id, poll => this.poll = poll);
  }

  update(option_id: string){
    this._optionService.update(option_id, res=> this.getPoll());
  }
}
