package com.onedirect.AirlineBooking.Repositories;

import com.onedirect.AirlineBooking.Models.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirplaneRepository extends JpaRepository<Airplane, Long>
{

}
