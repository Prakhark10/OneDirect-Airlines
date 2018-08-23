import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../../services/airline.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public airlineReg;	
  constructor(private airlineService: AirlineService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getAirlineReg(this.route.snapshot.params.id);
  }

  getAirlineReg(id:number)
  {
  	this.airlineService.getAirline(id).subscribe(
	data=>{
			this.airlineReg=data;
		},
	err=>console.error(err),
	//()=>console.log(loaded),
  	);
  }

}
