# JavaScript Type Coercion Bug
This example demonstrates a common JavaScript pitfall: unexpected type coercion due to loose typing.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.

## Bug
The `foo` function attempts to add two values. However, because one is a string, JavaScript converts the number to a string and concatenates them.

## Solution
Explicit type checking or conversion can prevent this. The solution uses `parseInt` to ensure both values are numbers before adding them.