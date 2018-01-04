import { Component, OnInit } from '@angular/core';
import { NewAppointment } from '../new-appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css']
})
export class AppointmentNewComponent implements OnInit {
  newAppointment={_id: "", user: "", date:null,time:"",reason:""}
  // newAppointment: NewAppointment;
  errors: string[] = [];
  currentUser: User = new User();
  constructor(
    private _userService: UserService,
    private _appointmentService: AppointmentService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        console.log(this.currentUser)
      }
    });
  }

  createAppointment(){
    this.errors=[];
    console.log(this.newAppointment.date,typeof this.newAppointment.date);
    this._appointmentService.create(this.newAppointment,(appointment)=>{
      if(appointment.errors){
        for (const key of Object.keys(appointment.errors)) {
          const error = appointment.errors[key];
          this.errors.push(error.message);
        }
      }else{
        this._router.navigateByUrl('/dashboard');
      }
    });
    
  }
}
