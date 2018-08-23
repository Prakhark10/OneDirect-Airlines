import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../../services/airline.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	models: string[] = [
		'AirBus 737',
		'Dreamliner 777',
		'A 320',
	];

	airlineform: FormGroup;
	validMessage: string ="";

  constructor(private airlineService: AirlineService) { }

  ngOnInit() {
  	this.airlineform=new FormGroup({
  	flightnumber: new FormControl('', Validators.required),
  	flightname: new FormControl('', Validators.required),
  	arrival: new FormControl('', Validators.required),
  	departure: new FormControl('', Validators.required),
  	duration: new FormControl('', Validators.required),
  	price: new FormControl('', Validators.required)
  	});
  }

  submitRegestration()
  {
  	if(this.airlineform.valid)
  	{
  		this.validMessage="You have successfully registered. Thank You";
  		this.airlineService.createAirlineRegistration(this.airlineform.value).subscribe(
  				data=>{
  					this.airlineform.reset();
  					return true;
  				},
  				error=>{
  					return Observable.throw(error);
  				}
  			)
  	}
  	else
  	{
  		this.validMessage="Please fill the complete form";
  	}
  }

}
