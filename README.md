Thrive International Frontend README

Overview
This repository contains the frontend codebase for the Thrive International project, developed by Team Data Thrivers at Eastern Washington University. The application is built with React 18 and TypeScript, styled with Tailwind CSS, and integrates with a .NET Core backend via RESTful APIs. The frontend provides a user interface for Thrive International staff to manage refugee intake, track family relationships, and process various forms, replacing an inefficient paper-based system with a digital solution.
The primary goal is to streamline refugee services, enhance data management, and facilitate secure data exchange with regional partners like World Relief
March 17, 2025


Project Structure
cscd-488-490-project-team-i-thrive-international/
│── .vscode/                    # VS Code configuration
│   ├── launch.json            # Debugging configuration for VS Code
│
├── src/                       # Source code directory
│   ├── index.tsx             # Entry point for React application
│   ├── App.tsx               # Root component defining app structure
│   ├── App.css               # Styles specific to App component
│   ├── index.css             # Global CSS styles
│   ├── App.test.tsx          # Unit tests for App component
│   ├── setupTests.tsx        # Test setup configuration
│   ├── thrive-logo.png       # Thrive International logo
│   ├── favicon.ico           # Favicon for browser tab
│   │
│   ├── assets/               # Static assets
│   │   ├── logo.png          # Additional logo file
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Navigation.tsx    # Navigation bar component
│   │
│   ├── pages/                # Page-level components
│   │   ├── HomePage.tsx      # Home page
│   │   ├── AboutUs.tsx       # About Us page
│   │   ├── FamilyTracker.tsx # Family relationship tracker page
│   │   ├── IntakeForms.tsx   # Intake forms overview page
│   │   ├── forms/            # Individual form components
│   │   │   ├── ThriveIntakeForm.tsx
│   │   │   ├── SoccerCampRegistration.tsx
│   │   │   ├── CulturalIntegrationProgram.tsx
│   │   │   ├── DSHSConsentForm.tsx
│   │   │   ├── EpiscopalPreferredCommunitiesIntakeForm.tsx
│   │   │   ├── CommunityOutreachMonthlyReport.tsx
│   │   │   ├── YouthProgramRegistrationForm.tsx
│   │   │   ├── DSHSCommunityOutreachAndEducationForm.tsx
│   │   │   ├── ThriveDSHSConsentForm.tsx
│   │   │   ├── CommunityOutreachAndEducation.tsx
│   │   │   ├── PCGAPRegistrationForm.tsx
│   │   │   ├── NewStudentRegistrationForm.tsx
│   │
│   ├── services/             # API service utilities
│   │   ├── apiService.ts     # API call functions
│   │
│   ├── config.ts             # Configuration settings (e.g., API base URL)
│
├── logs/                     # Log files (if applicable)
│
├── hooks/                    # Custom React hooks (currently empty)
│
├── refs/                     # Reference files (currently empty)
│
├── package.json              # Node.js dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── README.md                 # This file
```



Prerequisites
Node.js: Version 18.x or higher (LTS recommended)
npm: Version 8.x or higher (comes with Node.js)
Visual Studio Code: Recommended IDE with extensions (e.g., ESLint, Prettier)
Backend Server: Running at http://localhost:5085/api (see backend README)
Setup Instructions
1. Clone the Repository:
   git clone < https://github.com/Sanmeet-EWU/cscd-488-490-project-team-i-thrive-international.git >
   cd cscd-488-490-project-team-i-thrive-international

2. Install Dependencies:
   npm install
   
This installs React, TypeScript, Axios, Tailwind CSS, and other dependencies listed in ‘package.json’.

3. Configure Environment:
Ensure ‘config.ts’ points to the correct backend API URL (default: ‘http://localhost:5085/api’).
     export const API_BASE_URL = 'http://localhost:5085/api';

4. Run the Development Server:
   npm start
The app will launch at ‘http://localhost:3000’ in your browser.

5. Build for Production:
   npm run build
Outputs optimized files to the ‘build/’ directory.

6. Run Tests:
   npm test
   Executes unit tests defined in ‘App.test.tsx’.



Key Components and Usage

Core Files
    index.tsx: Renders the React app into the DOM.
        Usage: Entry point; no direct modification needed unless customizing render logic.
    App.tsx: Defines the app’s routing and layout using React Router.
        Usage: Add new routes here for additional pages (e.g., /family-tracker).
    App.css & index.css: Contain global and app-specific styles.
        Usage: Modify for custom styling beyond Tailwind.

Pages
    HomePage.tsx: Displays a welcome message and overview.
    AboutUs.tsx: Provides information about Thrive International.
    FamilyTracker.tsx: Allows staff to search by refugee ID and first name to view family relationships (e.g., "Pardi P is parent to Cardi B").
        Usage: Enter a 5-digit refugeeId (e.g., 10006) and firstName (e.g., "Cardi").
    IntakeForms.tsx: Lists available forms for navigation.
        Usage: Links to individual form components in forms/.

Forms
Located in src/pages/forms/, these components handle data entry:

    ThriveIntakeForm.tsx: General refugee intake form.
    NewStudentRegistrationForm.tsx: Registers students with autofilled, locked fields from refugee data.
        Usage: Input refugeeId to autofill fields like firstName, lastName, etc.
    Others: Specialized forms (e.g., SoccerCampRegistration.tsx, DSHSConsentForm.tsx) for specific programs.

Services
    apiService.ts: Manages API requests to the backend.
        Key Functions:
            submitForm: Posts form data (e.g., NewStudentRegistration).
            fetchRefugeeById: Retrieves refugee details by ID.
            fetchFamilyMembers: Fetches family relationship data.
        Usage: Import into components (e.g., FamilyTracker.tsx) for data fetching.

Components
    Navigation.tsx: Responsive navbar for page navigation.
        Usage: Customize links to match app routes.


Development Guidelines

    Coding Style: Use TypeScript interfaces (e.g., FamilyRelationship) for type safety.
    Styling: Prefer Tailwind CSS classes (e.g., bg-indigo-600) over custom CSS.
    State Management: Use React hooks (useState, useEffect) for simplicity; consider Redux for complex state.
    Error Handling: Log errors to console and display user-friendly messages (e.g., "No family relationship found").

Example Usage
Running Family Tracker
    Start the app: npm start.
    Navigate to http://localhost:3000/family-tracker.
    Enter refugeeId: 10006 and firstName: "Cardi".
    Expected Output: "Pardi P is parent to Cardi B" (assuming backend data exists).

Submitting a New Student Registration
    Go to http://localhost:3000/intake-forms/new-student-registration.
    Enter refugeeId: 10006.
    Autofilled fields (e.g., firstName: "Cardi") lock; fill remaining fields.
    Submit to save data to the backend.

Troubleshooting
    "Cannot connect to backend": Ensure the backend is running at http://localhost:5085/api. Check config.ts.
    Form fields not autofilling: Verify fetchRefugeeById returns data; check refugee_id in PostgreSQL.
    Tests failing: Update App.test.tsx to match current App.tsx structure.

Additional Notes
    Dependencies: Listed in package.json. Key packages include:
        react, react-dom: Core libraries.
        typescript: Type safety.
        axios: API requests.
        tailwindcss: Styling.
    File Requests: To review any file (e.g., NewStudentRegistrationForm.tsx), contact Parbhat Rai or check the repository.
    Future Enhancements: Add authentication (e.g., JWT), multi-language support, and advanced form validation.

Contact
For questions or contributions:

    Team Lead: Carla Diaz (cdiaz19@ewu.edu)
    Repository: https://github.com/carladiaz03 
    Team Member: Parbhat Rai (prai@eagles.ewu.edu)
    Repository: https://github.com/prai42 
    Team Lead: Matthew Powers (mpowers16@ewu.edu)
    Repository: https://github.com/Matthew-Powers 

Notes

Detail: Includes setup, structure breakdown, usage examples, and troubleshooting, making it comprehensive for new developers.
Customization: Adjust paths (e.g., ../services/apiService) or add more files (e.g., ThriveIntakeForm.tsx) if needed. I’ve kept it focused on key files we worked on.
Assumptions: Assumed React Router for navigation (common in such projects); tweak if you used a different approach.

