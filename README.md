# url-shortener-api

RESTful API for URL shortening

## Structure

```text
- url-shortener-api (root)
  - requests
    - req.rest
  - tmp
    - db.json
  - app.js
  - package.json
```

- `req.rest` file includes sample GET and POST requests callable with VSCode REST client
- `db.json` file is used for storing shortened urls and original urls as json
- `app.js` has the handler functions

## Usage

1. Clone this repository
  
```
git clone git@github.com:baglana/url-shortener-api.git
```
  
2. Navigate into the folder  

```
cd url-shortener-api
```
  
3. Install NPM dependencies

```
npm install
```

7. Run the project
  
```
npm start
```

localhost: "http://127.0.0.1:3000";
