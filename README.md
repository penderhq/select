# Select

[![npm package][npm-badge]][npm]

Used for selecting one option from a list of options.

## Getting started

````
npm install @cmds/select --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| clearable | Boolean |  | Whether the user can clear the selected option |
| noOptionsRenderer | Function | | Responsible for the empty state for the option list |
| optionRenderer | Function | | Responsible for rendering a custom version of the option `({option: object, inList: boolean}): jsx` |
| alignLeft | Boolean |  | Whether the dropdown should align left |
| value | String | | Selected option |
| options | Boolean | ✓ | List of options to choose from. |
| onChange | Function | ✓ | Triggers when the selection value changes: `({id: string, value: string})` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/select.svg
[npm]: https://www.npmjs.org/package/@cmds/select
