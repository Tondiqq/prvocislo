function jePrvocislo(cislo) {
  if (cislo % 2 == 0) {
    return cislo === 2;
  }
  let i=3;
  while (i <= Math.sqrt(cislo)) {
    if (cislo % i == 0) {
      return false;
    }
    i += 2; 
  }
  return true;
}

const tlacitko = document.querySelector('button');
const vstup = document.querySelector('#cislo');
const vysledek = document.querySelector('#vysledek');

tlacitko.onclick = function() {
    let cislo = parseInt(vstup.value);
    if (isNaN(cislo)) {
        vysledek.textContent = 'Zadejte číslo!';
    } else {
        if (jePrvocislo(cislo)) {
            vysledek.textContent = 'ANO';
        } else {
            vysledek.textContent = 'NE';
        }
    }
}

