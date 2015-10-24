## fis-parser-jsx

react jsx parser for fis


### INSTALL

```bash
npm install -g fis-parser-jsx
```

### USE

- in fis

	```js
	fis.config.set('modules.parser.jsx', 'jsx');
	
	fis.config.set('roadmap.path', [
		{
			reg: '**.jsx',
			isES6: true
		}
	].concat(fis.config.get('roadmap.path', []));
	```
