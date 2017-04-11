# react-font-importer

```sh
npm i --save @team-griffin/react-font-importer

yarn add @team-griffin/react-font-importer
```

This package will import css files at runtime. This is useful for importing Google Web Font urls.
Whilst this package does import css files, and is named font importer it is designed for use with gwf.

## Usage

```javascript
import { FontImporter } from '@team-griffin/react-font-importer'

const urls = [
  'https://fonts.googleapis.com/css?family=Roboto',
];

return (
 <FontImporter urls={urls}>
  <span>It also renders children just in case you need it.</span>
 </FontImporter>
);
```