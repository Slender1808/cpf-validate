# cpf-validate
#### Validate CPF numbers (for NodeJS and browsers)

this project is a fork of the iscpf project with some improvements
# ![cpf-validate](https://raw.githubusercontent.com/Slender1808/cpf-validate/master/flowchart_Mon_Nov_23_2020_19_31_26_GMT-0300_%28Hor%C3%A1rio_Padr%C3%A3o_de_Bras%C3%ADlia%29.svg)
This diagram is self generated by [js-code-to-svg-flowchart](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart)
## Installation

**NPM module:**

```console
npm install --save cpf-validate
```

**CDN:**

```console
<script src="https://raw.githubusercontent.com/Slender1808/cpf-validate/master/index.js"></script>
```

## Usage

Import the lib:

**ES6 Modules:**

```js
import cpfValidate from 'cpf-validate'
```

**CommonJS:**

```js
const cpfValidate = require('cpf-validate')
```
Don't worry about pontuation:

```js
console.log(cpfValidate('75300153206')) // true
console.log(cpfValidate('462.498.462-55')) // true
```