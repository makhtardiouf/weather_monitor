# Makhtar Diouf 20171125
This project is a demo frontend application for querying weather-related data (file wheater.php) provided by GiteSoft.

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4, and uses the latest Angular: 5.0.3.

## Running the Development servers

`cd makhtar-frontend`

`npm install`

* Run the backend weather app

`php -S localhost:9200 &`

* Serve the frontend

Run `ng serve` for the dev server, then navigate to `http://localhost:4200/` to view the UI.

# Implementation notes

* The responsive UI layout is implemented in src/index.html with the Bootstrap 3 CSS framework. The Cities information layout is implemented in src/app/weather/weather.component.html.

* A weather component and service is defined to encapsulate the app's main properties, methods to query weather-related data by connecting to the backend app (weather.php).

* The backend app address is set by srvUrl in weather/weather.service.ts. It should matches with address used in the 'Running the Development servers' section.

* The search feature is incomplete

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

`ng generate component weather`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

