
# Just Clean Test Project

 Node backend Api test  application

## Technologies:

- NodeJS Express v4.17.1
- express-jwt v6.0.0
- passport v0.4.1
- Sequelize v6.3.5
- socket.io v3.0.4
- redis 3.0.2
- MySQL


## To run this project

- Mysql server need to be connected and update in config/config.json in root folder

- Install the node modules running the comands below at the root folder:

```batch
    npm install
```

- Run the DB Migration:

```batch
    npm run db
```

- Acess the URL:

```batch
    http://localhost:3000/
```


## How it works

The Listing Api of towers with sort pagination and fillter

parameters  searchFeild =  the keyword of feild EX(name location etc)
            searchKeyword = the search word from the user

pagination  parameters  page = page number , size =  no of items need to display          

Example API  http://localhost:3000/api/tower/list?searchFeild=name&searchKeyword=1&page=0&size=5

Show with offices parameter api http://localhost:3000/api/tower/list?showWithOffices=true&page=0&size=5

CRUD Operation for Tower only for authenticated user

user API  POST  http://localhost:3000/api/auth/login  email : john@smith.com   password: 123456789

response you will get token   use in request headers 

Authorization  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA4MTE1OTkxfQ.uv4C_MDQIPL1_L4_qtG7PydIKEp7UEObWTGJW6_dyx8
