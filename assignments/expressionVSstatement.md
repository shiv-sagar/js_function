# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
//error is unexpected token 'var'


```

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);

// error: unexpected token";"
// function's parameters should be separated by commas not semicolon.
```

3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);

//output is 44
```

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21);

//output : NaN;
// we are not passing any argument for second parameter b in the function invocation,it's taking it as undefined so addition of undefined and a number is NaN. 

```

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);

output: 21;
```

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(211);
//error: unexpected token 'if'
//we should always pass expressions in retaurn, if else is the statement not expression.
```

7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
knowWhy(21);
//error: unexpected token 'if'
//we should always pass expressions(which ultimately results in value) in return, if else is the statement not expression.
```

8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
isItIf(if(true){console.log('Testing')});
//error : unexpected token 'if'
//we cant pass statement in the functions arguments,here if else statement is passed in function arguments while invocating the function;
```
