# CSS Test Data Schema

This document describes the data schema used in the CSS test files located in the `tests/` directory. Each test file exports a JavaScript object that defines tests for various CSS features, properties, values, and interfaces.

## Top-Level Structure

Each test file exports an object with the following top-level properties:

### Required Properties

- **`title`** (string): A human-readable title describing the CSS specification being tested
- **`links`** (object): Links to relevant documentation
  - **`tr`** (string, optional): Link to the W3C TR (Technical Report) specification
  - **`dev`** (string, optional): Link to the W3C Editor's Draft specification
  - **`devtype`** (string, optional): Type of specification (e.g., "whatwg", "houdini")
  - **`mdn`** (string, optional): Link to MDN documentation
  - **`mdnGroup`** (string, optional): MDN group classification

### Optional Properties

- **`status`** (object): Information about the specification status
  - **`stability`** (string): One of "stable", "experimental", or other status values
  - **`first-snapshot`** (number, optional): Year of first snapshot

## Test Categories

The test files can contain different categories of tests, each with their own structure:

### 1. Properties Tests

Tests for CSS properties and their values.

```javascript
properties: {
  'property-name': {
    links: { /* documentation links */ },
    tests: ['value1', 'value2', 'value3']
  }
}
```

### 2. Values Tests

Tests for specific CSS values, functions, or syntax that can be used across multiple properties.

```javascript
values: {
  properties: ['property1', 'property2'], // Optional: specific properties this applies to
  'value-name': {
    links: { /* documentation links */ },
    tests: ['value1', 'value2', 'value3']
  }
}
```

### 3. Declaration Tests

Tests for CSS declarations (property-value pairs).

```javascript
declaration: {
  'declaration-pattern': {
    links: { /* documentation links */ },
    tests: ['property: value1', 'property: value2']
  }
}
```

### 4. Selectors Tests

Tests for CSS selectors.

```javascript
selectors: {
  'selector-name': {
    links: { /* documentation links */ },
    tests: [':selector', 'element:selector']
  }
}
```

### 5. At-Rules Tests

Tests for CSS at-rules like `@media`, `@keyframes`, etc.

```javascript
'@rules': {
  '@rule-name': {
    links: { /* documentation links */ },
    tests: ['@rule syntax1', '@rule syntax2']
  }
}
```

### 6. Interfaces Tests

Tests for JavaScript/DOM interfaces related to CSS.

```javascript
interfaces: {
  'InterfaceName': {
    links: { /* documentation links */ },
    tests: ['method1', 'method2', 'property1'],
    interface: function() { /* returns interface object */ },
    required: 'CSS required for this test' // Optional
  }
}
```

## Test Value Types

### String Values
Most test values are strings representing CSS syntax:
- **CSS properties**: `'grid'`, `'inline-grid'`
- **CSS values**: `'100px'`, `'1fr'`, `'auto'`
- **CSS functions**: `'calc(100px + 1fr)'`, `'rgb(255, 0, 0)'`
- **CSS declarations**: `'width: var(--foo)'`, `'--foo: 2px'`

### Array Values
Some tests use arrays for complex values:
- **Multiple values**: `['value1', 'value2', 'value3']`
- **Property lists**: `['width', 'height', 'margin']`

### Function Values
For interface tests, the `interface` property contains a function that returns the interface object to test.

## Special Properties

### Links Object
Each test category can have its own `links` object with the same structure as the top-level links.

### Required Property
Some tests have a `required` property that specifies CSS code that must be present for the test to work properly.

### Properties Array
In `values` tests, the `properties` array specifies which CSS properties the values apply to.

## Examples

### Simple Property Test
```javascript
export default {
  title: 'CSS Grid Layout Module Level 1',
  links: {
    tr: 'css-grid-1',
    dev: 'css-grid-1'
  },
  properties: {
    display: {
      links: {
        tr: '#grid-containers',
        dev: '#grid-containers'
      },
      tests: ['grid', 'inline-grid']
    }
  }
}
```

### Complex Values Test
```javascript
export default {
  title: 'CSS Color Module Level 4',
  links: {
    tr: 'css-color-4',
    dev: 'css-color-4'
  },
  values: {
    properties: ['color', 'background-color', 'border-color'],
    'hwb()': {
      links: {
        tr: '#the-hwb-notation',
        dev: '#the-hwb-notation'
      },
      tests: ['hwb(0 0% 0%)', 'hwb(0 0% 0% / .5)']
    }
  }
}
```

### Interface Test
```javascript
export default {
  title: 'CSS Typed OM Level 1',
  links: {
    dev: 'css-typed-om-1',
    devtype: 'houdini'
  },
  interfaces: {
    CSSStyleValue: {
      links: {
        dev: '#stylevalue-objects',
        mdnGroup: 'DOM'
      },
      tests: ['parse', 'parseAll'],
      interface: function() {
        return CSSStyleValue
      }
    }
  }
}
```

## File Naming Convention

Test files follow a naming convention that reflects the CSS specification they test:
- CSS specifications: `css-[module]-[level].js` (e.g., `css-grid-1.js`)
- CSS2 specifications: `css2-[module].js` (e.g., `css2-colors.js`)
- Other specifications: `[spec]-[module].js` (e.g., `svg2-paths.js`)

## Usage

These test files are imported and used by the main application to:
1. Generate test cases for CSS feature detection
2. Provide documentation links for each feature
3. Organize tests by specification and feature type
4. Support the CSS compatibility testing interface
