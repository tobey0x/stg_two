I apologize for the oversight. Here's the complete README content in a single markdown file, without splitting:

```markdown
# Node.js REST API with PostgreSQL

This is a simple REST API project built with Node.js and PostgreSQL for CRUD operations on a "person" resource. The API allows you to create, read, update, and delete person records in the database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Sample Requests and Responses](#sample-requests-and-responses)
- [UML Diagram](#uml-diagram)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- PostgreSQL installed and running
- Clone this repository.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/node-postgresql-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd stg_two
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your database configuration:

   ```env
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   ```

5. Start the server:

   ```bash
   npm start
   ```

The API will be accessible at `http://localhost:3000`.

## API Endpoints

- `POST /api`: Create a new person record.
- `GET /api/:id`: Retrieve details of a person by ID.
- `PUT /api/:id`: Update details of an existing person by ID.
- `DELETE /api/:id`: Delete a person by ID.

## Sample Requests and Responses

### Create a Person (POST /api)

Request:

```json
POST /api
Content-Type: application/json

{
  "name": "John Doe",
}
```

Response:

```json
{
	"id": 1,
	"name": "John Doe",
	"updatedAt": "2023-09-15T15:04:03.925Z",
	"createdAt": "2023-09-15T15:04:03.925Z"
}
```

### Get Person by ID (GET /api/:id)

Request:

```json
GET /api/1
```

Response:

```json
{
	"id": 1,
	"name": "John Doe",
	"updatedAt": "2023-09-15T15:04:03.925Z",
	"createdAt": "2023-09-15T15:04:03.925Z"
}
```

### Update Person by ID (PUT /api/:id)

Request:

```json
PUT /api/1
Content-Type: application/json

{
  "message": "Person was updated successfully.",
}
```

Response:

```json
{
  "message": "Person updated successfully"
}
```

### Delete Person by ID (DELETE /api/:id)

Request:

```json
DELETE /api/1
```

Response:

```json
{
  "message": "Person was deleted successfully!"
}
```


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```