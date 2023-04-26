let no,n1,n2,n3,n4,nota
no=prompt('nombre del estudiante')
n1=Number(prompt('ingrese nota 1'))
n2=Number(prompt('ingrese nota 2'))
n3=Number(prompt('ingrese nota 3'))
n4=Number(prompt('ingrese nota 4'))
nf=(n1+n2+n3+n4)/4
if (nota<3 && nota >0) {
    alert('PIERDE')
}else if (nota<5 && nota>3) {
    alert('GANA')
}else if (nota>5) {
    alert('error')
}
