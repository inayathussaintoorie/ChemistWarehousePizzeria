# ChemistWarehousePizzeria
## This is the server-side and client-side codebase of the ChemistWarehousePizzeria project.
## *Server side* is developed in **.Net Core 6**, and *client-side* is built in **ReactJs**

### Getting Started
### Follow these steps to get the project up and running on your local machine:

1. Open the **ChemistWarehousePizzeria-Server** project in Visual Studio 2022.
3. Check the connection string in appsettings.json and ensure it is pointing to the correct database.
4. Build The project.
5. Go to `Tools=>Nuget Package manager => Package manager console`.
6. Run the command `Update-Database` in the **Package Manager Console**. This will execute all the migrations and create the database in the local database, and seed the initial data.
7. Run the web API from within Visual Studio 2022.
8. Open the **ChemistWarehousePizzeria-Client** project in Visual Studio Code.
9. Ensure that **Node.js** is installed on your local machine.
10. Open a terminal window from the menu **Terminal** in VS Code.
11. Run the command `npm install` to install all the required dependencies.
12. Run the command `npm start` to start the client-side application.
13. Run the command `npm test` to run unit tests.
14. Server-side code has Tests project **ChemistWarehousePizzeria.Tests** which uses xUnit framework.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
