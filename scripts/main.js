/* Number of column span of the select indices element */
let selectIndices = document.querySelector('select');
let selectIndicesColumn = document.querySelector('p#select-indices');
let selectCdiColumn = document.querySelector('p#cdi-percentage');

selectIndices.onchange = function() {
  let indicesValue = selectIndices.value;
  if (indicesValue != 12) {
    selectIndicesColumn.style.gridColumn = '1 / -1';
    selectCdiColumn.setAttribute('hidden', true);
  } else {
    selectCdiColumn.removeAttribute('hidden');
    selectIndicesColumn.style.gridRow = '1';
    selectIndicesColumn.style.gridColumn = '1';
    selectCdiColumn.style.gridRow = '1';
    selectCdiColumn.style.gridColumn = '2';
  }
}