import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: User = new  User();
  appointments: Appointment[];
  characters = [
    'Finn the Dog',
    'Jake the human', 
    'Princess Bubblegum'
  ]
  
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
        console.log(this.currentUser)
        console.log("user info")
      }
      this.getAppointments();
    });
  }

  getAppointments(){
    this._appointmentService.index((appointments)=> this.appointments = appointments); 
  }

  logout(){
    this._userService.logout(this.currentUser);
    this._router.navigateByUrl('/');
  }

  destroyAppointment(id: string){
    this._appointmentService.destroy(id,(res)=>{
      if(res.status === true){
        this.getAppointments();
      }
    });
  }
}