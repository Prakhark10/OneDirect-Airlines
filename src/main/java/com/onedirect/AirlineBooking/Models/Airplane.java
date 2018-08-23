package com.onedirect.AirlineBooking.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Airplane
{

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long flightnumber;

    private String flightname;
    private String departure;
    private String arrival;
    private String duration;
    private String price;

    public String getFlightname() {
        return flightname;
    }

    public void setFlightname(String flightname) {
        this.flightname = flightname;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public long getFlightnumber() {
        return flightnumber;
    }

    public void setFlightnumber(long flightnumber) {
        this.flightnumber = flightnumber;
    }
}
