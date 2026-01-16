//bitwise AND
a=16 & 18;
//output 16: 10000
//       18: 10010
//           10000 =16
console. log(a);

//bitwise OR
a=16 |18;
//output 10000
//       10010 
//     = 10010 =18
console. log(a);

//bitwise NOT
b = ~6;
//output 
// 6 = 0000 0110
//~6= 1111 1001 = -7
console. log(b);

//bitwise XOR
c=5 ^ 3;
//output 5: 101
//       3: 011
//     = 110 =6
console. log(c);


//left shift
d=6 << 1;
//output     6: 110
//left shift 1: 1100 =12
console. log(d);

//right shift
e=12 >> 1;  
//output     12: 1100
//right shift 1: 110 =6
console. log(e);

//zero fill right shift
f=-12 >>> 1;        
//output     -12: 11111111 11111111 11111111 11110100
//zero fill right shift 1: 01111111 11111111 11111111 11111010 =2147483642
console. log(f);


