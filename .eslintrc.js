'use strict';

module.exports = {
    // http://eslint.org/docs/rules/

    'ecmaFeatures': {
        'arrowFunctions': true, // enable arrow functions
        'binaryLiterals': true, // enable binary literals
        'blockBindings': true, // enable let and const (aka block bindings)
        'classes': true, // enable classes
        'defaultParams': false, // enable default function parameters
        'destructuring': false, // enable destructuring
        'forOf': true, // enable for-of loops
        'generators': true, // enable generators
        'modules': false, // enable modules and global strict mode
        'objectLiteralComputedProperties': false, // enable computed object literal property names
        'objectLiteralDuplicateProperties': false, // enable duplicate object literal properties in strict mode
        'objectLiteralShorthandMethods': false, // enable object literal shorthand methods
        'objectLiteralShorthandProperties': false, // enable object literal shorthand properties
        'octalLiterals': true, // enable octal literals
        'regexUFlag': true, // enable the regular expression u flag
        'regexYFlag': true, // enable the regular expression y flag
        'restParams': true, // enable the rest parameters
        'spread': true, // enable the spread operator for arrays
        'templateStrings': true, // enable template strings
        'superInFunctions': false, // enable super references inside of functions
        'unicodeCodePointEscapes': true, // enable code point escapes
        'globalReturn': false, // allow return statements in the global scope
        'jsx': true, // enable JSX
        'experimentalObjectRestSpread': false // enable support for the experimental object rest/spread properties
    },

    'env': {
        //platforms
        'browser': true, // browser global variables.
        'node': true, // Node.js global variables and Node.js-specific rules.
        'commonjs': true, //CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
        'worker': true, //web workers global variables.
        'amd': false, // defines require() and define() as global variables as per the amd spec.

        //testing
        'mocha': false, // adds all of the Mocha testing global variables.
        'jasmine': true, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        'jest': false, //Jest global variables.
        'phantomjs': false, // phantomjs global variables.
        'protractor': false, //Protractor global variables.
        'qunit': false, //QUnit global variables.
        'embertest': false,

        //frameworks
        'jquery': false, // jquery global variables.
        'prototypejs': false, // prototypejs global variables.
        'shelljs': false, // shelljs global variables.
        'meteor': false,
        'mongo': false,
        'applescript': false,
        'nashorn': false,

        //other es6
        'serviceworker': true,
        'webextensions': true,
        'es6': true
    },

    'globals': {
        // e.g. 'angular': true
        'require': true
    },

    'plugins': [
        // e.g. 'react' (must run `npm install eslint-plugin-react` first)
        'react'
    ],

    'rules': {

        //Possible Errors
        'comma-dangle': 1, // disallow trailing commas in object literals
        'no-cond-assign': 2, // disallow assignment in conditional expressions
        'no-console': 1, // disallow use of console (off by default in the node environment)
        'no-constant-condition': 2, // disallow use of constant expressions in conditions
        'no-control-regex': 2, // disallow control characters in regular expressions
        'no-debugger': 1, // disallow use of debugger
        'no-dupe-args': 2, // disallow duplicate arguments in functions (recommended)
        'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
        'no-duplicate-case': 2, // disallow a duplicate case label. (recommended)
        'no-empty-character-class': 2, // disallow the use of empty character classes in regular expressions
        'no-empty': 2, // disallow empty statements
        'no-ex-assign': 2, // disallow assigning to the exception in a catch block
        'no-extra-boolean-cast': 2, // disallow double-negation boolean casts in a boolean context
        'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
        'no-extra-semi': 2, // disallow unnecessary semicolons
        'no-func-assign': 2, // disallow overwriting functions written as function declarations
        'no-inner-declarations': 2, // disallow function or variable declarations in nested blocks
        'no-invalid-regexp': 2, // disallow invalid regular expression strings in the RegExp constructor
        'no-irregular-whitespace': 1, // disallow irregular whitespace outside of strings and comments
        'no-negated-in-lhs': 0, // disallow negation of the left operand of an in expression
        'no-obj-calls': 2, // disallow the use of object properties of the global object (Math and JSON) as functions
        'no-regex-spaces': 2, // disallow multiple spaces in a regular expression literal
        'no-sparse-arrays': 2, // disallow sparse arrays
        'no-unexpected-multiline': 2, // Avoid code that looks like two expressions but is actually one
        'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
        'use-isnan': 2, // disallow comparisons with the value NaN
        'valid-jsdoc': 1, // Ensure JSDoc comments are valid (off by default)
        'valid-typeof': 2, // Ensure that the results of typeof are compared against a valid string


        //Best Practices
        'accessor-pairs': 2, // Enforces getter/setter pairs in objects
        'block-scoped-var': 2, // treat var statements as if they were block scoped (off by default)
        'complexity': [2, 8], // specify the maximum cyclomatic complexity allowed in a program (off by default)
        'consistent-return': 2, // require return statements to either always or never specify values
        'curly': 2, // specify curly brace conventions for all control statements
        'default-case': 0, // require default case in switch statements (off by default)
        'dot-location': 0, // enforces consistent newlines before or after dots
        'dot-notation': 0, // encourages use of dot notation whenever possible
        'eqeqeq': 0, // require the use of === and !==
        'guard-for-in': 0, // make sure for-in loops have an if statement (off by default)
        'no-alert': 2, // disallow the use of alert, confirm, and prompt
        'no-caller': 2, // disallow use of arguments.caller or arguments.callee
        'no-case-declarations': 2, // disallow lexical declarations in case clauses
        'no-div-regex': 2, // disallow division operators explicitly at beginning of regular expression (off by default)
        'no-else-return': 2, // disallow else after a return in an if (off by default)
        'no-empty-label': 2, // disallow use of labels for anything other then loops and switches
        'no-empty-pattern': 2, // disallow use of empty destructuring patterns
        'no-eq-null': 0, // disallow comparisons to null without a type-checking operator (off by default)
        'no-eval': 2, // disallow use of eval()
        'no-extend-native': 2, // disallow adding to native types
        'no-extra-bind': 1, // disallow unnecessary function binding
        'no-fallthrough': 1, // disallow fallthrough of case statements
        'no-floating-decimal': 0, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        'no-implicit-coercion': 2, // keywords outside of classes or class-like objects
        'no-implied-eval': 2, // disallow use of eval()-like methods
        'no-invalid-this': 0, //
        'no-iterator': 2, // disallow usage of __iterator__ property
        'no-labels': 0, // disallow use of labeled statements
        'no-lone-blocks': 2, // disallow unnecessary nested blocks
        'no-loop-func': 2, // disallow creation of functions within loops
        'no-magic-numbers': 1, // disallow the use of magic numbers
        'no-multi-spaces': 1, // disallow use of multiple spaces
        'no-multi-str': 2, // disallow use of multiline strings
        'no-native-reassign': 2, // disallow reassignments of native objects
        'no-new-func': 2, // disallow use of new operator for Function object
        'no-new-wrappers': 2, // disallows creating new instances of String, Number, and Boolean
        'no-new': 2, // disallow use of new operator when not part of the assignment or comparison
        'no-octal-escape': 2, // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        'no-octal': 2, // disallow use of octal literals
        'no-param-reassign': 1, // disallow reassignment of function parameters
        'no-process-env': 0, // disallow use of process.env (off by default)
        'no-proto': 2, // disallow usage of __proto__ property
        'no-redeclare': [
            2,
            {
                'builtinGlobals': true
            }
        ], // disallow declaring the same variable more then once
        'no-return-assign': 2, // disallow use of assignment in return statement
        'no-script-url': 2, // disallow use of javascript: urls.
        'no-self-compare': 2, // disallow comparisons where both sides are exactly the same (off by default)
        'no-sequences': 2, // disallow use of comma operator
        'no-throw-literal': 2, // restrict what can be thrown as an exception
        'no-unused-expressions': [
            2,
            {
                allowTernary: true
            }
        ], // disallow usage of expressions in statement position
        'no-useless-call': 2, // disallow unnecessary .call() and .apply()
        'no-useless-concat': 2, // disallow unnecessary concatenation of literals or template literals
        'no-void': 0, // disallow use of void operator (off by default)
        'no-warning-comments': 2, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
        'no-with': 2, // disallow use of the with statement
        'radix': 2, // require use of the second argument for parseInt() (off by default)
        'vars-on-top': 0, // requires to declare all vars on top of their containing scope (off by default)
        'wrap-iife': 1, // require immediate function invocation to be wrapped in parentheses (off by default)
        'yoda': 1, // require or disallow Yoda conditions


        //Strict Mode
        'strict': [
            2,
            'global'
        ], // controls location of Use Strict Directives


        //Variables
        'init-declarations': 0, //enforce or disallow variable initializations at definition
        'no-catch-shadow': 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        'no-delete-var': 1, // disallow deletion of variables
        'no-label-var': 2, // disallow labels that share a name with a variable
        'no-shadow-restricted-names': 2, // disallow shadowing of names such as arguments
        'no-shadow': 1, // disallow declaration of variables already declared in the outer scope
        'no-undef-init': 0, // disallow use of undefined when initializing variables
        'no-undef': 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undefined': 0, // disallow use of undefined variable (off by default)
        'no-unused-vars': 1, // disallow declaration of variables that are not used in the code
        'no-use-before-define': 0, // disallow use of variables before they are defined


        //Node.js
        'callback-return': 0, // enforce return after a callback
        'global-require': 2, // enforce require() on top-level module scope
        'handle-callback-err': 2, // enforces error handling in callbacks (off by default) (on by default in the node environment)
        'no-mixed-requires': 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
        'no-new-require': 2, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
        'no-path-concat': 0, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
        'no-process-exit': 0, // disallow process.exit() (on by default in the node environment)
        'no-restricted-modules': 0, // restrict usage of specified node modules (off by default)
        'no-sync': 2, // disallow use of synchronous methods (off by default)


        //Stylistic Issues
        'array-bracket-spacing': 0, // enforce spacing inside array brackets (fixable)
        'block-spacing': 0, // disallow or enforce spaces inside of single line blocks (fixable)
        'brace-style': 2, // enforce one true brace style (off by default)
        'camelcase': 2, // require camel case names
        'comma-spacing': 0, // enforce spacing before and after comma
        'comma-style': 1, // enforce one true comma style (off by default)
        'computed-property-spacing': 0, // require or disallow padding inside computed properties (fixable)
        'consistent-this': 2, // enforces consistent naming when capturing the current execution context (off by default)
        'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
        'func-names': 2, // require function expressions to have a name (off by default)
        'func-style': [
            2,
            'declaration'
        ], // enforces use of function declarations or expressions (off by default)
        'id-length': 0, // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-match': 0, // require identifiers to match the provided regular expression
        'indent': 2, // specify tab or space width for your code (fixable)
        'jsx-quotes': [
            2,
            'prefer-single'
        ], // specify whether double or single quotes should be used in JSX attributes
        'key-spacing': 0, // enforces spacing between keys and values in object literal properties
        'linebreak-style': 2, // disallow mixed 'LF' and 'CRLF' as linebreaks
        'lines-around-comment': 0, // enforce empty lines around comments
        'max-depth': 1, // specify the maximum depth that blocks can be nested
        'max-len': 0, // specify the maximum length of a line in your program
        'max-nested-callbacks': 2, // specify the maximum depth callbacks can be nested (off by default)
        'max-params': [2, 8], // limits the number of parameters that can be used in the function declaration
        'max-statements ': 0, // specify the maximum number of statement allowed in a function
        'new-cap': 2, // require a capital letter for constructors
        'new-parens': 0, // disallow the omission of parentheses when invoking a constructor with no arguments
        'newline-after-var': 0, // require or disallow an empty newline after variable declarations
        'no-array-constructor': 2, // disallow use of the Array constructor
        'no-continue': 0, // disallow use of the continue statement
        'no-bitwise': 1, // disallow use of bitwise operators
        'no-inline-comments': 0, // disallow comments inline after code (off by default)
        'no-lonely-if': 2, // disallow if as the only statement in an else block (off by default)
        'no-mixed-spaces-and-tabs': 2, // disallow mixed spaces and tabs for indentation
        'no-multiple-empty-lines': 0, // disallow multiple empty lines (off by default)
        'no-negated-condition': 0, // disallow negated conditions
        'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
        'no-new-object': 0, // disallow use of the Object constructor
        'no-plusplus': 0, // disallow use of unary operators, ++ and --
        'no-restricted-syntax ': 0, // disallow use of certain syntax in code
        'no-spaced-func': 0, // disallow space between function identifier and application
        'no-ternary': 0, // disallow the use of ternary operators (off by default)
        'no-trailing-spaces': 0, // disallow trailing whitespace at the end of lines
        'no-underscore-dangle': 2, // disallow dangling underscores in identifiers
        'no-unneeded-ternary': 1, // disallow the use of ternary operators when a simpler alternative exists
        'object-curly-spacing': 0, // require or disallow padding inside curly braces (fixable)
        'one-var': 0, // allow just one var statement per function (off by default)
        'operator-assignment': 0, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
        'padded-blocks': 0, // enforce padding within blocks (off by default)
        'quote-props': 0, // require quotes around object literal property names (off by default)
        'quotes': [
            2,
            'single',
            'avoid-escape'
        ], // specify whether double or single quotes should be used
        'require-jsdoc': [
            2,
            {
                'require': {
                    'FunctionDeclaration': true,
                    'MethodDefinition': true,
                    'ClassDeclaration': true
                }
            }
        ],
        'semi-spacing': 1, //
        'semi': 2, // require or disallow use of semicolons instead of ASI
        'sort-vars': 0, // sort variables within the same declaration block (off by default)
        'space-after-keywords': 0, // require a space after certain keywords (off by default)
        'space-before-blocks': 0, // require or disallow space before blocks (off by default)
        'space-before-function-paren': 0, // require or disallow a space before function opening parenthesis
        'space-before-keywords': 0, // require a space before certain keywords (fixable)
        'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
        'space-infix-ops': 0, // require spaces around operators
        'space-return-throw-case': 0, // require a space after return, throw, and case
        'space-unary-ops': 0, // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        'spaced-line-comment': 0, // require or disallow a space immediately following the // in a line comment (off by default)
        'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)


        //ECMAScript 6
        'arrow-body-style': [
            2,
            'always'
        ], // require braces in arrow function body
        'arrow-parens': 2, // require parens in arrow function arguments
        'arrow-spacing': 0, // require space before/after arrow function's arrow (fixable)
        'constructor-super': 2, // verify calls of super() in constructors
        'generator-star-spacing': 1, //enforce spacing around the * in generator functions (fixable)
        'no-arrow-condition': 1, // disallow arrow functions where a condition is expected
        'no-class-assign': 2, // disallow modifying variables of class declarations
        'no-const-assign': 2, // disallow modifying variables that are declared using const
        'no-dupe-class-members': 2, // disallow duplicate name in class members
        'no-this-before-super': 2, // disallow use of this/super before calling super() in constructors
        'no-var': 1, // require let or const instead of var (off by default)
        'object-shorthand': 0, // require method and property shorthand syntax for object literals
        'prefer-arrow-callback': 0, // suggest using arrow functions as callbacks
        'prefer-const': 1, // suggest using const declaration for variables that are never modified after declared
        'prefer-reflect': 0, // suggest using Reflect methods where applicable
        'prefer-spread': 2, // suggest using the spread operator instead of .apply()
        'prefer-template': 2, // suggest using template literals instead of strings concatenation
        'require-yield': 2, //  disallow generator functions that do not have yield
    }
}
