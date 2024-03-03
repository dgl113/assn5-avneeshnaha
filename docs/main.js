'use strict';

(() => {
  window.addEventListener('load', (event) => {
    const items = [];
    const updateUI = () => {
      document.getElementById('totalCost').textContent =
        '$' + items.reduce((pv, cv) => pv + cv.cost(), 0).toFixed(2);
    };

    document.getElementById('addItem').addEventListener('click', (event) => {
      items.push(
        new OrderItem(parseInt(quantity.value), size.value, description.value)
      );

      const newRow = document.createElement('tr');
      newRow.appendChild(document.createElement('td')).textContent =
        quantity.value;
      newRow.appendChild(document.createElement('td')).textContent = size.value;
      newRow.appendChild(document.createElement('td')).textContent =
        description.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.setAttribute('type', 'button');
      newRow
        .appendChild(document.createElement('td'))
        .appendChild(deleteButton);
      list.appendChild(newRow);

      updateUI();
    });

    list.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON') {
        list.querySelectorAll('button').forEach((value, index) => {
          if (value == event.target) {
            items.splice(index, 1);
            value.parentElement.parentElement.parentElement.removeChild(
              value.parentElement.parentElement
            );
          }
        });
        updateUI();
      }
    });

    updateUI();
  });
})();
