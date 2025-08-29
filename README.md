## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

*Answer:*

**getElementById**
-  Finds inly one Element by its ID.
- ID's are Unique, so its always return a single element.

**getElementsByClassName**
- Finds Element by their class name .
- returns a live HTML Collection.
- need to use index to access specific elements.

**querySelector**
- Finds the first element that matches a css selector.
- returns a single element .

**querySelectorAll** 
- Finds all elements that match a css selector . 
- returns a static NodeList .

## 2. How do you create and insert a new element into the DOM?

*Answer:*
To reduce and insert a new element in the DOM :
- Create it using document.createElement()
- Add Content or attributes .
- insert it into the DOM using methods .
## 3. What is Event Bubbling and how does it work?

*Answer:*
Event Bubbling is when an event triggered on a child element propagates upward through its parent elements in the DOM
- Event first fires on the target element .
 - Then it bubbles up to its parent , grandparent and so on.

 ## 4. What is Event Delegation in JavaScript? Why is it useful?

*Answer:*
Event delegation is a technique in javascript where you attach a single event listener to a parent element instead of multiple child elements.The parent handles events for its children using event bubbling.

** useful reason:** 
1. Efficient 
2. Dynamic elements 
3. cleaner code 

## 5. What is the difference between preventDefault() and stopPropagation() methods?

 *Answer:*
 - preventDefault() stops default action .
 - stopPropagation() stops event from reaching parent element.
 










<!-- ## Question 1
**Q:** What is Java?  
**A:** Java is a high-level, object-oriented programming language.

## Question 2
**Q:** What is JVM?  
**A:** JVM means Java Virtual Machine. It runs Java bytecode.

## Question 3
**Q:** Difference between JDK and JRE?  
**A:**  
- JDK → Java Development Kit (for developers).  
- JRE → Java Runtime Environment (for running apps). -->
