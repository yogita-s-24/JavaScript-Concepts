function toPostfix(expression) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    const associativity = { '+': 'L', '-': 'L', '*': 'L', '/': 'L', '^': 'R' };
    
    const output = [];
    const stack = [];

    for (const token of expression) {
        if (/\d/.test(token)) {  
            output.push(token);
        } else if (token in precedence) { 
            while (
                stack.length &&
                stack[stack.length - 1] !== '(' &&
                (
                    precedence[stack[stack.length - 1]] > precedence[token] ||
                    (precedence[stack[stack.length - 1]] === precedence[token] && associativity[token] === 'L')
                )
            ) {
                output.push(stack.pop());
            }
            stack.push(token);
        } else if (token === '(') {  
            stack.push(token);
        } else if (token === ')') {  
            while (stack.length && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();  
        }
    }

    while (stack.length) { 
        output.push(stack.pop());
    }

    return output.join('');
}