1. At line 11, the length of the prices array will be loged because var i is visable outside of the forloop (it is declared with var) and the assignment of i is above line 11.
2. At line 12, then discounted price of the last element of the prices array will be loged because discoutedPridce has no block scope (it is declared with var) and its final assignment is above line 12.
3. At line 13, the final price of the last element of the prices array will be loged because finalPrice has no block scope (it is declared with var) and its final assignment is above line 13.
4. [ 50, 100, 150 ] will be dsiplayed. The algorithm calculate the discouted Price for every elements, make them round to the nearest cent, then put them into an array and return the array.
5. At line 11, an error will be thrown beccause i is only visible inside the for loop since it is declared using let.
6. At line 12, an error will be thrown beccause discountedPrice is only visible inside the for loop since it is declared using let.
7. At line 13, the final price of the last element of the prices array will be loged because finalPrice is in the same scope as line 13.
8. [ 50, 100, 150 ] will be dsiplayed. The algorithm calculate the discouted Price for every elements, make them round to the nearest cent, then put them into an array and return the array.
9. The code will not reach line 11 because the function tries to change a assigned constant varaible finalPrice.
10. The code will not reach line 12 because the function tries to change a assigned constant varaible finalPrice.
11. The code will not reach line 13 because the function tries to change a assigned constant varaible finalPrice.
12. It will return an error because this function try to reassigne an assigned constant variable finalPrice
13. A. console.log(student.name);
    B. console.log(student['Grad Year']);
    C. student.greeting();
    D. console.log(student['Favorite Teacher'].name);
    E. console.log(student.courseLoad[1]);
14. A. '3'+2='353', this is like a string concatenation of '3' and '2'. 
    B. '3'-2 = 1, this is like the numeric calculation of 3 - 2.
    C. 3+null = 0, this is like adding 0 to 3
    D. '3' + null = '3null", this is like a string concatentation.
    E. true+3 = 4 because true is 1 and 1 + 3 = 4.
    F. false + null = 0, because false is 0 and null is like 0, 0 + 0 = 0
    G.  "3" + undefined = '3undefined' this is like a string concatentation.
    H. "3" - undefined = NaN, because the result is not a number.
15. A. True, because '2' is converted to 2
    B. False, this is a string comparison by dictionary order.
    C. True, '2' converted to 2, and 2 == 2
    D. False, this is a strict comparison, 2 and '2' are different type so false.
    E. False, boolean expression does not equal to numeric 2.
    F. True, Boolean(2) is true and true === true
16. == is less strict, the left and right side does not have to be the same type, but === is more strict, the left and right side has to be the same type.
17. It will print 'How are you?'. 2 does not equal to true when comparing, so the first if statement evaluates to false but when 2 is the only number in the else if argument, the 2 is type casted into boolean 2, which is true.
19. [ 6, 8, 10 ] is the result. The loop go through 3 times, the fist time, it grabs the first element of the array and calls the doSomething function with the argument of 1 and function(x), inside doSomething, it uses function(x) to return 6. The second time, it grabs the second element of the array and calls the doSomething function with the argument of 2 and function(x), inside doSomething, it uses function(x) to return 8. The thrid time, it grabs the thrid element of the array and calls the doSomething function with the argument of 3 and function(x), inside doSomething, it uses function(x) to return 10.
21. error, undefined varaible i.
    