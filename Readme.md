 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 getElementById(id) selects one element by its id and returns a single element.
getElementsByClassName(className) selects elements by class name and returns a live HTMLCollection.Live means it updates automatically if the DOM changes.
 querySelector(selector) returns the first matching element and uses CSS selector syntax. 
 querySelectorAll(selector) returns all matching elements and returns a static NodeList.

2. How do you create and insert a new element into the DOM?
Step 1: Create the element 
const div = document.createElement('div');
Step 2: Add content or class
div.innerText = "Hello World";
div.classList.add('card');
Step 3: Insert into the DOM
document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?
Event Bubbling is the process where an event starts from the target element and then propagates upward to its parent elements.
How it Works :
The Trigger: An event like a click happens on a specific element, known as the target.
The Bubbling: The event triggers the handler on the target, then "bubbles up" to its direct parent, then the grandparent, and so on, until it reaches the document and window objects.




What is Event Delegation? Why is it Useful?
Event delegation is a JavaScript technique for improving performance by attaching a single event listener to a parent element rather than multiple listeners to individual child elements.
Why is it Useful :
Event Delegation reduces memory usage by attaching one listener to a parent instead of dozens to individual children.
It automatically handles events for new elements added to the DOM after the page has loaded.
It simplifies codebase by centralizing event logic in a single location rather than duplicating it.
It improves initial load times and responsiveness by minimizing DOM interactions during setup.
Event Delegation prevents memory leaks because you don't need to manually remove listeners when child elements are deleted.
What is the difference between preventDefault() and stopPropagation() methods? 

preventDefault()
stopPropagation() 
It stops the browser's default behavior for that event.
It stops the event from bubbling up the DOM tree.
The event continues to move up to parent elements.
It cuts off the event so parent listeners never hear it.
It validates a form before submission or stopping a link from navigating.
It prevents a "click" on a child button from triggering a "click" on its parent container.
The element's "native" job, like checking a checkbox, is canceled.
The element's job finishes but it doesn't tell its parents about it.


