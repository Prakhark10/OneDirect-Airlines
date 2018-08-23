package com.onedirect.AirlineBooking.Controller;

import com.onedirect.AirlineBooking.Models.Airplane;
import com.onedirect.AirlineBooking.Repositories.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/airplanes")
public class AirplaneController
{
    @Autowired
    private AirplaneRepository airplaneRepository;

    @GetMapping
    public List<Airplane> list()
    {
        return airplaneRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Airplane airplane)
    {
        airplaneRepository.save(airplane);
    }

    @GetMapping("/{flightnumber}")
    public Airplane get(@PathVariable("flightnumber") long id)
    {
        return airplaneRepository.getOne(id);
    }
}
