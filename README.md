# @babel/plugin-transform-enum-literal

## Example

**In**

```javascript
const EnumColor = ({
    RED,
    GREEN,
    BLUE,
});
```

**Out**

```javascript
const EnumColor = {
    RED: Symbol("RED"),
    GREEN: Symbol("GREEN"),
    BLUE: Symbol("BLUE")
};
```

## Installation

```sh
npm install --save-dev git+https://github.com/PavelDymkov/babel-plugin-transform-enum-literal.git
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["@babel/plugin-transform-enum-literal"]
}
```
