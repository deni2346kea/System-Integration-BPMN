SYSTEM INTEGRATION 

##Names:
    Denis Kutnar
    Filip Malek
    Claudiu Robciuc




##INTERFACE
*[Author - Denis Kutnar]

User will have relatively simple UI where she/he can directly ask for weather 
forecast of wished destination. For example user can request actual temperature
of NYC. 
There is one button (on action) which will call a function and request Lon & Lat 
parameters of desired destination by using SOAP web service. 
After getting this parameters a RESTfull service will give us the Weather forecast,  
which will be shown on the main page.

##RESTfull
*[Author - Filip Malek]

# REST API for SI

NodeJS based rest api server

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install npm, node version 8

## Deployment

```
npm run dev
```

## Usage

To use our api first run it [##Getting started] and then make api calls.
 - to get a response structure the api url like such:
  ```
  localhost:3000/api/weather :POST
  ```

  Body expect following params:
  lat - latitude (in numbers like: 123) *required
  lon - longitude (in numbers like: 123) *required
  units - units of meassurements (standard/imperial/metric)

  If you want to recieve a more detailed answer then use following url:

  ```
  localhost:3000/api/weather/detailed :POST
  ```

  This answer will contain a more detailed answer.
  Params are the same as in the previous example.
## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

Version 1.0

## Authors

* **Filip Malek** - *Initial work* - [REX500](https://github.com/REX500)

## License

This project is licensed under the MIT License

## Acknowledgments

* Hat tip to out teacher Dora Dimitrova
* Inspiration - Santiago Donoso, Peter Dalgaard-Jensen, Andrei Dogaru









