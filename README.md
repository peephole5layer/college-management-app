# College Management Application

![NestJS](https://img.shields.io/badge/NestJS-7E1E9C?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FF5733?style=for-the-badge&logo=typeorm&logoColor=white)

This is a backend application built using NestJS and PostgreSQL to manage and query college-related data. The application demonstrates the ability to design relationships, handle complex queries, and deploy a project in a production-like environment.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Manage college data including placements and courses
- Filter colleges by city and state
- Handle complex queries and relationships
- Built with NestJS and PostgreSQL
- Ready for deployment in a production-like environment

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL

## Getting Started

### Clone the Repository

```bash
git clone <repository_url>
cd college-management-app

### Install Dependencies

```bash
npm install
```

### Configure the Database

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your_postgres_user
    DATABASE_PASSWORD=your_postgres_password
    DATABASE_NAME=college_management
    ```

3. Run the database migrations to set up the database schema:

    ```bash
    npm run typeorm migration:run
    ```

  ### Run the Application

    ```bash
    npm run start:dev
    ```

    This will start the application in development mode. You can access the API at `http://localhost:3000`.
 ## API Endpoints

    ### College Endpoints

    - **GET /colleges**: Retrieve a list of all colleges.
    - **GET /colleges/:id**: Retrieve details of a specific college by ID.
    - **POST /colleges**: Create a new college.
    - **PUT /colleges/:id**: Update an existing college by ID.
    - **DELETE /colleges/:id**: Delete a college by ID.

    ### Course Endpoints

    - **GET /courses**: Retrieve a list of all courses.
    - **GET /courses/:id**: Retrieve details of a specific course by ID.
    - **POST /courses**: Create a new course.
    - **PUT /courses/:id**: Update an existing course by ID.
    - **DELETE /courses/:id**: Delete a course by ID.

    ### Placement Endpoints

    - **GET /placements**: Retrieve a list of all placements.
    - **GET /placements/:id**: Retrieve details of a specific placement by ID.
    - **POST /placements**: Create a new placement.
    - **PUT /placements/:id**: Update an existing placement by ID.
    - **DELETE /placements/:id**: Delete a placement by ID.
    
