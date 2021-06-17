'use strict';

function drop(id)
{
  let list = document.querySelector('#list'+id);

  list.classList.toggle('click');
}

document.addEventListener('DOMContentLoaded', function () {

  for(let i = 2; i <= 11; i++)
  {
    let button = document.querySelector('#menu'+i);

    button.addEventListener('click', function () { drop(i)});
  }

});
