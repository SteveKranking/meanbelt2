import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NewOption } from './new-option'

@Injectable()
export class OptionService {

  constructor(
    private _http:Http
  ) { }

  update(id:string, callback){
    this._http.put(`options/${id}`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
 }

 create(option, callback){
   console.log(option);
  this._http.post('/poll/:id/optionscreate', option).subscribe(
    res => callback(res.json()),
    err => console.log(err)
  );
}

}