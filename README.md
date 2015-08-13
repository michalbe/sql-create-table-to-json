# sql-create-table-to-json
Create `JSON` objects from `SQL CREATE TABLE` queries

## What?

data.sql:
```sql
CREATE TABLE `dev_access` (
 `id_profile` int(10) unsigned NOT NULL,
 `id_tab` int(10) unsigned NOT NULL,
 `view` int(11) NOT NULL,
 `add` int(11) NOT NULL,
 `edit` int(11) NOT NULL,
 `delete` int(11) NOT NULL,
 PRIMARY KEY (`id_profile`,`id_tab`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

CREATE TABLE `dev_attribute` (
 `id_attribute` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `id_attribute_group` int(10) unsigned NOT NULL,
 `color` varchar(32) DEFAULT NULL,
 `position` int(10) unsigned NOT NULL DEFAULT '0',
 PRIMARY KEY (`id_attribute`),
 KEY `attribute_group` (`id_attribute_group`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8
```

output:
```javascript
{
  "dev_access": [
    "id_profile",
    "id_tab",
    "view",
    "add",
    "edit",
    "delete"
  ],
  "dev_attribute": [
    "id_attribute",
    "id_attribute_group",
    "color",
    "position"
  ]
}
```

##How?

Create SQL schema dump:
```bash
$ mysqldump -h localhost -u root -p --no-data --compact bd_name > data.sql
```

then:
```bash
$ npm install sql-create-table-to-json
```

then in js:

```javascript
var sct2j = require('sql-create-table-to-json');

sct2j('data.sql', function(err, data){
  console.log(JSON.stringify(data, 2, 2));
});
```
