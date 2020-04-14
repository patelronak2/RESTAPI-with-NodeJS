# REST API with NodeJS

Achieved Objectives:
  1. REST API with NodeJS
  2. SQLite database to read, create, modify and delete entries
  3. HTTP requests in NodeJS to test a REST API

/**
	NOTE: In order to get the correct result, database needs to be reset first.
	
	Run server.js freshly before running client.js file.
	
	values in GET, PUT, DELETE requests for single item has been hard coded.
**/
REST API STRUCTURE

#Collection

GET request to /api/ return a JSON array of the entire collection (which could be empty).

PUT request to /api/ contain a JSON array in the request body representing a new collection of items. The current collection will be replaced with the new collection. 
The PUT request returns "REPLACE COLLECTION SUCCESSFUL" in the body.

POST request to /api/ contain a JSON object in the request body representing a new item. The new item will be added to the current collection. The POST request return "CREATE ENTRY SUCCESSFUL" in the body.

DELETE request to /api/ delete the entire collection. The DELETE request return "DELETE COLLECTION SUCCESSFUL"

#Item

GET request to /api/id return a JSON object of the entry in the collection with the supplied id.

PUT request to /api/id contain a JSON object in the request body representing updated values for the item with the supplied id. The item will be updated in the current collection to reflect these new values. The PUT request return "UPDATE ITEM SUCCESSFUL".

DELETE request to /api/id should delete the item from the collection. The DELETE request return "DELETE ITEM SUCCESSFUL".


