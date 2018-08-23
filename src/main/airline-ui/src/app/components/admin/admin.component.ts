import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../../services/airline.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
  public airlines;	
  
  constructor(private airlineService: AirlineService) { }

  ngOnInit() {
  	this.getAirlines();
  }

  getAirlines()
  {
  	this.airlineService.getAirlines().subscribe(
  		data => {this.airlines= data},
  		err => console.error(err),
  		() => console.log('airlines loaded')
  		);
  }

}
