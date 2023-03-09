# ChemistWarehousePizzeria-Server
## This is the server-side and client-side codebase of the ChemistWarehousePizzeria project.
## *Server side* is developed in **.Net Core 6**, and *client-side* is built in **ReactJs**

### Getting Started
### Follow these steps to get the project up and running on your local machine:

1. Open the **ChemistWarehousePizzeria-Server** project in Visual Studio 2022.
2. Check the connection string in appsettings.json and ensure it is pointing to the correct database.
3. Go to `Tools=>Nuget Package manager => Package manager console`.
4. Run the command `Update-Database` in the **Package Manager Console**. This will execute all the migrations and create the database in the local database, and seed the initial data.
5. Run the web API.
6. Open the **ChemistWarehousePizzeria-Client** project in Visual Studio Code.
7. Ensure that **Node.js** is installed on your local machine.
8. Open a terminal window from the menu **Terminal** in VS Code.
9. Run the command `npm install` to install all the required dependencies.
10. Run the command `npm start` to start the client-side application.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
