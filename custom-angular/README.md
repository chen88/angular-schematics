### Build

```
npm run build
```

### Run Test

```
// comp
schematics .:comp --name=test --dry-run=false --force

// directive 
schematics .:directive --name=test --dry-run=false --force

// service
schematics .:service --name=test --dry-run=false --force

```

### Link

```
cd ..
npm link custom-angular
```

### Running

```
ng g custom-angular:comp {name}
```


# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 