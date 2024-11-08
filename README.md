# Blog API
This is a blog backend API where users can authenticate, create posts with different meta options, create tags and add them to posts. Also it is possible to upload image files to the server (images will be saved to S3 bucket on Amazon). The project is built using NestJS, PostgeSQL, TypeORM. Alternatively there is a simplified version which uses MongoDB and Mongoose (available on separate branch). Authorization and authentication is implemented with JWT. It is also possible to authenticate using Google.

## Features
- **Posts Management**: Authorized users can create, update and delete posts. Also it is possible to fetch paginated posts in some dates range.
- **Users Authentication**: After signing in user receives access and refresh tokens.
- **User Account Management**: It is possible to create and update single user account and also create multiple users with one request.
- **Meta Options**: Meta options is a special property which can be attached to the post. Meta options can be separately created.
- **Tags**: Tags are also one of posts properties and should be created before adding to post.
- **Upload images**: There is a possibility to upload image files to the server. As a response user receives a cloudfront url attached to the apploaded image.

## Technologies
### Development
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **PostgreSQL**: An open-source relational database known for its robustness, extensibility, and compliance with SQL standards.
- **TypeORM**: An Object-Relational Mapping (ORM) library for TypeScript and JavaScript, supporting multiple databases.
- **Docker**: A platform for developing, shipping, and running applications in isolated containers. Used for running database on local machine.
- **Google Auth**: An authentication service by Google that allows secure user login with Google accounts.

### Mail sending
- **Mailtrap**: SMTP provider for sending welcome emails to newly created users

### Files storage
- **AWS S3**: A scalable storage service by Amazon Web Services for storing and retrieving any amount of data. Used for storing files.
- **AWS CloudFront**: A content delivery network (CDN) by AWS that distributes content globally with low latency.

### Alternative database
- **MongoDB**: A NoSQL database known for its flexibility and scalability, storing data in JSON-like documents.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing schema-based data validation.

### Deployment
- **PM2**: A process manager for Node.js applications that simplifies deployment and management. Used for running deployed application on Amazon.
- **AWS EC2**: A service by Amazon Web Services providing resizable compute capacity in the cloud.

### Testing and documentation
- **Jest**: A JavaScript testing framework for unit and integration testing with a focus on simplicity.
- **Swagger**: A toolset for designing, building, documenting, and consuming RESTful APIs.
- **Compodoc**: A documentation tool that generates static documentation from code.


## How to run the project localy

### 1. Clone the Repository

```bash
git clone https://github.com/olha-dev-fullstack/nest-blog-api.git
cd nest-blog-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` files:

- `.env.development` for developmet mode with next structure:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_SYNC=false
DB_AUTOLOAD=true

// randomly generated keys
API_VERSION=
PROFILE_API_KEY=

JWT_SECRET=
JWT_TOKEN_AUDIENCE=localhost:3000
JWT_TOKEN_ISSUER=localhost:3000
JWT_ACCESS_TOKEN_TTL=3600
JWT_REFRESH_TOKEN_TTL=86400

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

AWS_PUBLIC_BUCKET_NAME=
AWS_REGION=
AWS_CLOUDFRONT_URL=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

// Mailtrap credentials
MAIL_HOST=
SMTP_USERNAME=
SMTP_PASSWORD=

MONGO_DB_USERNAME=
MONGO_DB_PASSWORD=
MONGO_DB_NAME=
MONGO_DB_CONNECTION_STRING=
```

- `.env.test` should be similatr to `env.development` to execute tests:

- in production `.env` file will be used so it can be generated similarly to development one.

### 3. Database Setup
Create `typeorm-cli.config.ts` file (you can use ``typeorm-cli.sample.config.ts` as an example) and set valid database_name

Run migrations to create local database:

```bash
npm run migration:run
```

### 5. Start the Server

Run the NestJS server:

- watch mode

```bash
npm run start:dev
```

- dev mode

```bash
npm run start
```

- production mode

```bash
npm run start:prod
```

The API will be available at `http://localhost:3000`.

## API Endpoints

Swagger documentation: http://ec2-63-176-53-21.eu-central-1.compute.amazonaws.com/api#/


## Running Tests

To run unit tests, use:

```bash
npm run test
```

To run End-to-End tests, use:

```bash
npm run test:e2e
```

## Generate documentation
```bash
npm run doc
```
It would be accessible on the port `3001`.