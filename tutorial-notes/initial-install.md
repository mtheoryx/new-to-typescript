npm install -g typescript

Create a basic typescript file for the app

touch app.ts

Create a dummy class, then transpile

tsc app.ts

This outputs app.js, in ES5

Try outputting to a bundle file

tsc --out bundle.js app.ts

You can watch files, too!

tsc --watch --out bundle.js app.ts

## TypeScript configuration

tsc --init

{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false
    },
    "exclude": [
        "node_modules"
    ]
}

This lets discovery find out the .ts files, and build them

You can now just run stuff with 

tsc

Auto discovery continued:

{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "outDir": "./dist"
    },
    "files": [
        "main.ts"
    ]
}

This lets you output to a dist, and auto-discover new files added