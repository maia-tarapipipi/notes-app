/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dsezj60drdzasru",
    "created": "2023-08-04 02:13:35.638Z",
    "updated": "2023-08-04 02:13:35.638Z",
    "name": "notes_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "or3laxw8",
        "name": "Title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fpqlqy8n",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dsezj60drdzasru");

  return dao.deleteCollection(collection);
})
