Overview

This repository contains the backend codebase for the Thrive International project, developed by Team Data Thrivers at Eastern Washington University. The backend is built with .NET Core 8 using C#, and integrates with a PostgreSQL database via Entity Framework Core. It provides RESTful APIs to support the React/TypeScript frontend, enabling functionalities like refugee intake, family relationship tracking, and student registration. The system replaces Thrive International’s inefficient paper-based processes with a secure, scalable digital platform.

Project Structure

ThriveInternationalBackend/
│── ThriveInternationalBackend.sln             # Solution file for Visual Studio
│── ThriveInternationalBackend.csproj          # Project file with dependencies
│── Program.cs                                # Entry point for the application
│── appsettings.json                          # Configuration settings (e.g., DB connection)
│── appsettings.Development.json             # Development-specific settings
│
├── Controllers/                             # API controllers
│   ├── StudentController.cs                 # Handles student-related endpoints
│   ├── FamilyController.cs                  # Manages family relationship queries
│   ├── IntakeController.cs                  # Processes intake form submissions
│   ├── HouseholdMembersController.cs        # Manages household member data
│   ├── RefugeesController.cs                # Handles refugee data operations
│   ├── ServicesController.cs                # Manages service records
│
├── Models/                                  # Data models
│   ├── Services.cs                          # Service entity model
│   ├── Student.cs                           # Student entity model
│   ├── HouseholdMembers.cs                  # Household member entity model
│   ├── IntakeFormData.cs                    # Intake form data model
│   ├── Refugee.cs                           # Refugee entity model
│
├── Data/                                    # Database context
│   ├── ThriveDbContext.cs                   # EF Core DbContext for PostgreSQL
│
├── Migrations/                              # Database migration files
│   ├── 20250303091646_InitialCreate.cs      # Initial migration script
│   ├── 20250303091646_InitialCreate.Designer.cs  # Designer file for initial migration
│   ├── ThriveDbContextModelSnapshot.cs      # EF Core model snapshot
│
├── Properties/                              # Project properties
│   ├── launchSettings.json                  # Launch settings for development
│
├── bin/                                     # Compiled binaries
│   ├── Debug/
│       ├── net9.0/
│           ├── ThriveInternationalBackend.dll  # Compiled application DLL
│           ├── ThriveInternationalBackend.pdb  # Debugging symbols
│           ├── ThriveInternationalBackend.deps.json  # Dependency metadata
│           ├── ThriveInternationalBackend.runtimeconfig.json  # Runtime config
│
├── obj/                                     # Build intermediates
│   ├── project.assets.json                  # NuGet asset manifest
│   ├── ThriveInternationalBackend.csproj.nuget.dgspec.json  # NuGet spec
│   ├── ThriveInternationalBackend.csproj.nuget.g.props  # NuGet properties
│   ├── ThriveInternationalBackend.csproj.nuget.g.targets  # NuGet targets
│   ├── Debug/
│       ├── net9.0/
│           ├── ThriveInternationalBackend.GeneratedMSBuildEditorConfig.editorconfig  # Build config




Prerequisites

    .NET Core SDK: Version 8.0 or higher (adjust to 9.0 if net9.0 is accurate)
    PostgreSQL: Version 15 or higher, with pgAdmin for management
    Visual Studio: 2022 (Community/Professional) or Visual Studio Code with C# extension
    Frontend: Running at http://localhost:3000 (see frontend README)

Setup Instructions

Clone the Repository:

git clone <repository-url>
cd ThriveInternationalBackend


Install Dependencies:

  Open ThriveInternationalBackend.sln in Visual Studio, and it will restore NuGet packages (e.g., Microsoft.EntityFrameworkCore, Npgsql.EntityFrameworkCore.PostgreSQL) automatically.
    Or, from the terminal:

dotnet restore

Configure Database:

    Update appsettings.json with your PostgreSQL connection string:

{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Database=thrive_db;Username=postgres;Password=your_password"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  }
}


Run the Application:
    In Visual Studio: Press F5 or click "Run".
    In terminal:
    dotnet run

The API will start at http://localhost:5085/api
