import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Router } from '@angular/router';
import { Poll } from '../poll';
import { OptionService } from '../option.service';
import { Option } from "../option";
import { NewOption} from "../new-option";

@Component({
  selector: 'app-options-create',
  templateUrl: './options-create.component.html',
  styleUrls: ['./options-create.component.css']
})
export class OptionsCreateComponent implements OnInit {

  poll: Poll = new Poll();
  poll_id: string;  
  errors;
  reply = {option: '', question: '', post: ''};
  newOption = this.reply;
  option: Option = new Option;

  currentUser: User = new User();

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
    console.log('hello');
    this.getPoll();
  }

  getPoll(){
    this._pollService.show(this.poll_id, poll => this.poll = poll);
  }

  createOptions(){
    this.errors=[];
    this._optionService.create(this.option,(option)=>{
      if(option.errors){
        for (const key of Object.keys(option.errors)) {
          const error = option.errors[key];
          this.errors.push(error.message);
        }
      }else{
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

}

 //tie option to poll and add it
  // i need req.params.id because thats the poll id 
  // app.put because this updates
  
  // addOption() {
  //   this._optionService.createOption(this.option, option => this.option = option);
  // }