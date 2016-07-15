# horizon-docker-simpleapp

An example application based on **[Horizon.io](http://horizon.io/)**. Horizon is a realtime, open-source backend for JavaScript apps.

## Usage

**Dev Mode**

docker-compose -f docker-compose.dev.yml up -d

**Debug Mode**

1. docker-compose -f docker-compose.dev.yml up -d rethinkdb  
2. npm install -g horizon  
3. cd src  
4. npm install  
5. node main.js or launch Visual Studio Code debugger 

**Force Import the RethinkDB schema**

hz set-schema --connect localhost:28015 schema.toml


