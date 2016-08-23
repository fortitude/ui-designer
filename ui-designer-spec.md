# UI Designer

## Component Serialization

### Simple Example

React
```js
React.createElement('a', {
  href: 'http://www.google.com'
}, 'click me')
```

JSON
```json
{
  "root": {
    "type": "a",
    "props": {
      "href": "http://www.google.com"
    },
    "children": [
      "click me"
    ]
  }
}
```

### Complex Example

React
```js
const Link = () =>
  <a href={this.props.href} className="Link">
    {this.props.children}
  </a>;

React.createElement(Link, null, 'click me')
```

JSON
```json
{
  "registry": {
    "Link": {
      "type": "a",
      "props": {
        "href": {
          "ref": "props",
          "name": "href"
        },
        "className": "Link"
      },
      "children": [
        {
          "ref": "props",
          "name": "children"
        }
      ]
    }
  },
  "root": {
    "type": {
      "ref": "registry",
      "name": "Link"
    },
    "children": [
      "click me"
    ]
  }
}
```
