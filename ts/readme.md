# TypeScript

## Installation

Globally:

```shell
npm install typescript -g
```

In a project:

```shell
npm install typescript -D
```

## Configuration

Default file is `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "DOM",
      "ES2021"
    ],
    "watch": true
  }
}
```

* target - the JavaScript version the `.ts` files converted to.
* lib - the JS we want TypeScript to support in our project
