function validateCpf(cpf) {
  let v1 = 0;
  let v2 = 0;
  const cal1 = (v, numCpf, i) => {
    //console.log(`${v} ${numCpf} ${i}`)
    return (v + numCpf * (9 - (i % 10)));
  }
  let index = 0
  for (let i = 0; i < cpf.length - 2; i++) {
    if (cpf[i] < 10 || cpf[i] > -1) {
    v1 = cal1(v1, cpf[i], index);
    v2 = cal1(v2, cpf[i], index + 1);
    index = index + 1
    }
  }
  //console.log("b " + v2 + " " + v1)
  const cal2 = (v) => {
    return ((v % 11) % 10);
  }
  v1 = cal2(v1);
  v2 = cal2((v2 + v1 * 9));
  //console.log("c " + v2 + " " + v1)
  //console.log()
  if (v2 == cpf[cpf.length - 2] && v1 == cpf[cpf.length - 1]) {
    return true
  }

  return false;
}
