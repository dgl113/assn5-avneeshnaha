[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13890556)

# DGL 113 2024WI Assignment #5

Preview the docs/index.html file with a web browser to get a
general idea about the webpage layout and its functionality,
then complete the following tasks.

Create a new file in the `docs` folder called `app.js`.

At the top of the `docs/app.js` file, add the `use strict` directive:

```javascript
'use strict';
```

Add a `<script>` element to the `index.html` file to include the `app.js` script.
Place the `<script>` element just before the closing `</body>` tag just like
the script element that is used to include the `main.js` script.

Create a JavaScript class `OrderItem` as follows:

1. The class should have 3 private data members: quantity, size, and description.
2. The class should have a constructor method `constructor(quantity,size,description)`
   where `quantity` is a number and `size` and `description` are strings describing
   the size and which drink is being ordered.
3. Add getters to the class for the `quantity`, `size`, and `description`
   properties.
4. Add setters to the class for the `quantity`, `size`, and `description`
   properties.
5. Add a `cost()` method to the class, which returns the cost of the
   item based on its `quantity`, `size`, and `description` properties.

Remember that:

- Short, Tall, Grande, and Venti coffees cost 2.99, 3.19, 3.49 and 3.99 respectively, and
- Short, Tall, Grande, and Venti teas cost 2.85, 3.05, 3.25, and 3.50 respectively.

HINT: this assignment is similar to Assignment 4. Here you will create a class to represent ordered items - drinks. The total part  you have done in Assignment 4 is not required for this assignment, which is offloaded to the built-in functions.

NOTE: Only modify the `docs/app.js` and `docs/index.html` files.
Do not make changes to any other files.
