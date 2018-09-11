# OneDirect-Airlines
The project is created using Spring Boot as backend and Angular as frontend.

### Backend
* [Maven]- It is a maven application.
* [Java Persistence Api]- It is used for persistance.
* [MVC framework]- The app is build on Model View Controller principle.
* [Postman]- It is used for api testing.
* [Apache Tomcat Server]- It is used for local hosting.
* [IntelliJ] - The ide used for creating the application.
 
 The testing was carried out in postman, screenshots are attached.
 1. https://github.com/Prakhark10/OneDirect-Airlines/blob/master/Screenshots/Screenshot%20(12).png .
    This get method calls the airlines listed in the database. All the information is sent in the form of JSON.
    
 2. https://github.com/Prakhark10/OneDirect-Airlines/blob/master/Screenshots/Screenshot%20(13).png .
    This get methos calls a single airline, based on its flightnumber.
    
 3. https://github.com/Prakhark10/OneDirect-Airlines/blob/master/Screenshots/Screenshot%20(14).png . 
    Here we can pass the flight details to create a new flight in the database, this is for admin to add new flights.
    
 The backend was throughly tested and no problem was found.
 
 ### Database
 * [SQLite3] - Is used for database queries.
 
 1. The database is stored in file "airplane.db".
 
 2.The database consists of,
| FlightNumber
| FlightName
| Arrival
| Departure 
| Duration 
| Price

### Frontend
1. It is made using Angular JS.

2. https://github.com/Prakhark10/OneDirect-Airlines/blob/master/Screenshots/Screenshot%20(15).png . This is the admin side, 
    where one can insert new flights.(Book button must be submit button, typing error). 

3. https://github.com/Prakhark10/OneDirect-Airlines/blob/master/Screenshots/Screenshot%20(16).png . The page where all flights
    are listed. There is a proxy error in angular, therefore the data could not be displayed.
    
 4. The search page could not be created due to lack of knowledge about angularjs. I learnt a lot, however due to some errors I 
 could not proceed  further.
 
 ### Working
 The backend is compiled using IntelliJ and runs on localhost:8080.
 The frontend runs on port 4200, and the requests are redirected from 4200 to 8080(however, there is an error in it).
 The frontend is compiled in src/main/angular-ci folder, using command npm-start on cmd.
    
