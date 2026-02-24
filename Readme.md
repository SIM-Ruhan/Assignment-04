 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 Answer: 
    i. getElementById(id) selects one element by its id and returns a single element.
    ii. getElementsByClassName(className) selects elements by class name and returns a live HTMLCollection.Live means it updates automatically if the DOM changes.
    iii. querySelector(selector) returns the first matching element and uses CSS selector syntax. 
    iv. querySelectorAll(selector) returns all matching elements and returns a static NodeList.

2. How do you create and insert a new element into the DOM?

Answer: 
    Step 1: Create the element 
    const div = document.createElement('div');
    Step 2: Add content or class
    div.innerText = "Hello World";
    div.classList.add('card');
    Step 3: Insert into the DOM
    document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Answer:
    Event Bubbling is the process where an event starts from the target element and then propagates upward to its parent elements.
    How it Works :
    The Trigger: An event like a click happens on a specific element, known as the target.
    The Bubbling: The event triggers the handler on the target, then "bubbles up" to its direct parent then the grandparent and so on until it reaches the document and window objects.

4. What is Event Delegation? Why is it Useful?

Answer:
    Event delegation is a JavaScript technique for improving performance by attaching a single event listener to a parent element rather than multiple listeners to individual child elements.
Why is it Useful :
i. Event Delegation reduces memory usage by attaching one listener to a parent instead of dozens to individual children.
ii. It automatically handles events for new elements added to the DOM after the page has loaded.
iii. It simplifies codebase by centralizing event logic in a single location rather than duplicating it.
iv. It improves initial load times and responsiveness by minimizing DOM interactions during setup.
v. Event Delegation prevents memory leaks because you don't need to manually remove listeners when child elements are deleted.

5. What is the difference between preventDefault() and stopPropagation() methods? 

    preventDefault()                
    i. It stops the browser's default behavior for that event.
    ii. The event continues to move up to parent elements.
    iii. It validates a form before submission or stopping a link from navigating.
    iv. The element's "native" job, like checking a checkbox, is canceled.

    stopPropagation()
    i. It stops the event from bubbling up the DOM tree.
    ii. It cuts off the event so parent listeners never hear it.
    iii. It prevents a "click" on a child button from triggering a "click" on its parent container.
    iv. The element's job finishes but it doesn't tell its parents about it.







