# Project Setup

## Getting Started

Follow the steps below to set up the project and get it running locally:

### 1. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm i
```
### 2. Create a .env File
In the root directory of the project, create a .env file and add the following variables:

```js
PORT=<your-port-number>
API_KEYS=["key1", "key2", "key3"]
```
- PORT: This is the port number on which your application will run (e.g., 3000).
- API_KEYS: An array of valid API keys that a client can use
### 3. Start the Application
After setting up the .env file and installing the dependencies, you can run the application using:

```bash
npm run dev
```


# Requirements from Rubric
| Requirement                                                                                                                         | Weight |
|-------------------------------------------------------------------------------------------------------------------------------------|--------|
| Create and use at least two pieces of custom middleware.                                                                            | 5%     |
| Create and use error-handling middleware.                                                                                           | 5%     |
| Use at least three different data categories (e.g., users, posts, or comments).                                                     | 5%     |
| Utilize reasonable data structuring practices.                                                                                      | 5%     |
| Utilize reasonable code organization practices.                                                                                     | 5%     |
| Create GET routes for all data that should be exposed to the client.                                                                | 5%     |
| Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.         | 5%     |
| Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH/PUT.| 5%     |
| Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.     | 5%     |
| Include query parameters for data filtering, where appropriate. At least one data category should allow filtering using query params.| 5%     |
| Utilize route parameters, where appropriate.                                                                                        | 5%     |
| Adhere to the guiding principles of REST.                                                                                           | 10%    |
| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers).                       | 10%    |
| Create and render at least one view using a view template and template engine.                                                      | 8%     |
| Use simple CSS to style the rendered views.                                                                                         | 2%     |
| Include a form within a rendered view that allows for interaction with your RESTful API.                                             | 3%     |
| Commit frequently to the git repository.                                                                                            | 5%     |
| Include a README file that contains a description of your application.                                                              | 2%     |
| Level of effort displayed in creativity, presentation, and user experience.                                                         | 5%     |
