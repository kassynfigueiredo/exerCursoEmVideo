function calcular() {
    let num = document.getElementById('txtn')
    let n = Number(num.value);
    let tab = document.getElementById('tab')
    if(num.value.length == 0){
      alert('Precisa de número');
    }else {
      tab.innerHTML = '' //limpa a tela antes de colocar outra tabuada
      for (let c = 0; c <= 10; c++){
        tab.innerHTML += `${c}x${n} = ${c*n}` + '\n'
    }
  }
}
