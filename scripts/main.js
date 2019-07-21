/* Adjust GUI based on the value of the indices selected */
let formCalculator = document.querySelector('form');
let selectElement = document.querySelector('select');
let selectIndicesColumn = document.querySelector('p#select-indices');
let selectCdiColumn = document.querySelector('p#cdi-percentage');

function toggleCdiColumn(on) {
  /* If true, hide column 'Porcentagem CDI'*/
  if (on == true) {
    selectIndicesColumn.style.gridColumn = '1 / -1';
    selectCdiColumn.setAttribute('hidden', true);
  } else {
    /* If false, show column 'Porcentagem CDI'*/
    selectCdiColumn.removeAttribute('hidden');
    selectIndicesColumn.style.gridRow = '1';
    selectIndicesColumn.style.gridColumn = '1';
    selectCdiColumn.style.gridRow = '1';
    selectCdiColumn.style.gridColumn = '2';
  }
}

selectElement.onchange = function() {
  if (selectElement.value != 12) {
    toggleCdiColumn(true);
  } else {
    toggleCdiColumn(false);
  }
}
formCalculator.onreset = function() {
  toggleCdiColumn(false);
}