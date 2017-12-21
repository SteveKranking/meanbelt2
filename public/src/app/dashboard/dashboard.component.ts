import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { PollService } from '../poll.service';
import { Poll } from '../poll';
import { FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: User = new  User();
  polls: Poll[];
  characters = [
    'Finn the Dog',
    'Jake the human', 
    'Princess Bubblegum'
  ]
  
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _pollService: PollService
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        this.newMethod();
        console.log(this.currentUser)
        console.log("user info")
      }
      this.getPolls();
    });
  }

  getPolls(){
    this._pollService.index((polls)=> this.polls = polls)
  }

  logout(){
    this._userService.logout(this.currentUser);
    this._router.navigateByUrl('/');
  }


  private newMethod() {
    console.log('you can do this');
  }

  destroyPoll(id: string){
    this._pollService.destroy(id,(res)=>{
      if(res.status === true){
        this.getPolls();
      }
    });
  }
}