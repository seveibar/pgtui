# pgtui - Readable pg_dump and Terminal Interface for Postgres

pgtui is a command line interface for viewing a postgres schema or outputing a readable directory representation of a postgres schema

## Installation

You can install pgtui globally like so:

`npm install -g pgtui`

but `pgtui` can also be added as a script to your `package.json` to help
developers more easily preview your database...

```
npm install --save-dev pgtui
```

Then in your package.json...

```javascript
{
  "name": "my-package",
  // ...
  "scripts": {
    // ...
    "db:view": "pgtui",
    "db:dump": "pgtui --dump ./db/structure",
  }
}
```

I'd also recommend adding `npm run db:dump` as a step after your migration, that way anyone reviewing a migration can see the change in the database structure!

> Looking for a good node migration framework? Try [node-pg-migrate](https://github.com/salsita/node-pg-migrate)
