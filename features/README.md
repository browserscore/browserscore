# CSS Test Data Schema

This document describes the data schema used in the CSS test files located in the `tests/` directory. Each test file exports a JavaScript object that defines tests for various CSS features, properties, values, and globals.

## Schema Summary

```ts
{
  // [Required] Human-readable title describing the CSS specification
  title: string,
  link?: string,
  mdn?: string, // Mdn link (when it cannot be inferred)
  links?: {
    tr?: string,           // Link to W3C TR (Technical Report) specification
    dev?: string,          // Link to W3C Editor's Draft specification
    devtype?: string,      // Type of specification (e.g., "whatwg", "houdini")
    mdn?: string,          // Link to MDN documentation
    mdnGroup?: string      // MDN group classification
  },

  // Information about the specification status
  status?: string,         // "stable", "experimental", or other status values
  firstSnapshot?: number,  // Year of first snapshot (camelCase)
  lastSnapshot?: number,   // Year of last snapshot (camelCase)

  // Tests for CSS properties and their values
  properties?: {
    "property-name": {
      links: { /* documentation links */ },
      tests: string[]
    }
  },

  // Tests for CSS values, functions, or syntax across multiple properties
  values?: {
    properties?: string[], // Specific properties this applies to
    "value-name": {
      links: { /* documentation links */ },
      tests: string[]
    }
  },

  // Tests for CSS selectors
  selectors?: {
    "selector-name": {
      links: { /* documentation links */ },
      tests: string[]
    }
  },

  // Tests for CSS at-rules like @media, @keyframes, etc.
  "@rules"?: {
    "@rule-name": {
      links: { /* documentation links */ },
      tests: string[]
    }
  },

  // Tests for JavaScript/DOM globals
  globals?: {
    "InterfaceName": {
      links: { /* documentation links */ },
      tests: string[],
      interface?: function,    // Returns interface object to test
    }
  }
}
```

## Top-Level Structure

Each test file exports an object with the following top-level properties:

### Properties

All optional

- **`title`** (string): A human-readable title describing the CSS specification being tested
- **`link`** (string): Spec link (shortname only)
- **`links`** (object): Links to specs (deprecated)
  - **`tr`** (string, optional): Link to the W3C TR (Technical Report) specification
  - **`dev`** (string, optional): Link to the W3C Editor's Draft specification
  - **`devtype`** (string, optional): Type of specification (e.g., "whatwg", "houdini")
  - **`mdn`** (string, optional): Link to MDN documentation
  - **`mdnGroup`** (string, optional): MDN group classification
- **`status`** (string): One of "stable", "experimental", or other status values
- **`firstSnapshot`** (number, optional): Year of first snapshot (camelCase)
- **`lastSnapshot`** (number, optional): Year of last snapshot (camelCase)

## Test Categories

The test files can contain different categories of tests, each with their own structure:

### 1. [Properties Tests](#properties-tests)

Tests for CSS properties and their values.

```javascript
properties: {
  'property-name': {
    links: { /* documentation links */ },
    tests: ['value1', 'value2', 'value3']
  }
}
```

<a name="properties-tests"></a>

### 2. [Values Tests](#values-tests)

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

<a name="values-tests"></a>

### 3. [Selectors Tests](#selectors-tests)

Tests for CSS selectors.

```javascript
selectors: {
  'selector-name': {
    links: { /* documentation links */ },
    tests: [':selector', 'element:selector']
  }
}
```

<a name="selectors-tests"></a>

### 4. [At-Rules Tests](#at-rules-tests)

Tests for CSS at-rules like `@media`, `@keyframes`, etc.

```javascript
atrules: {
  '@rule-name': {
    links: { /* documentation links */ },
    tests: ['@rule syntax1', '@rule syntax2']
  }
}
```

<a name="at-rules-tests"></a>

### 5. [Globals Tests](#globals-tests)

Tests for JavaScript/DOM globals related to CSS.

```javascript
globals: {
  'InterfaceName': {
    links: { /* documentation links */ },
    tests: ['method1', 'method2', 'property1'],
  }
}
```

<a name="globals-tests"></a>

## Test Value Types

### String Values
Most test values are strings representing CSS syntax:
- **CSS properties**: `'grid'`, `'inline-grid'`
- **CSS values**: `'100px'`, `'1fr'`, `'auto'`
- **CSS functions**: `'calc(100px + 1fr)'`, `'rgb(255, 0, 0)'`

### Array Values
Some tests use arrays for complex values:
- **Multiple values**: `['value1', 'value2', 'value3']`
- **Property lists**: `['width', 'height', 'margin']`

### Function Values
For interface tests, the `interface` property contains a function that returns the interface object to test.

## Special Properties

### Links Object
Each test category can have its own `links` object with the same structure as the top-level links.

### Properties Array
In `values` tests, the `properties` array specifies which CSS properties the values apply to.

## Examples

### Simple Property Test
```javascript
export default {
  title: 'CSS Grid Layout Module Level 1',
  status: 'stable',
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
  status: 'stable',
  firstSnapshot: 2022,
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

### Global Test
```javascript
export default {
  title: 'CSS Typed OM Level 1',
  status: 'experimental',
  links: {
    dev: 'css-typed-om-1',
  },
  globals: {
    CSSStyleValue: {
      links: {
        dev: '#stylevalue-objects',
        mdnGroup: 'DOM'
      },
      tests: ['parse', 'parseAll'],
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
