const namatmn = [ `edi`, `reza`,`aziz`,`fadil`,`fatur` ]

console.log(`name  ${namatmn}`)
for (let a = 1; a < namatmn.length; a++) {
    if (namatmn)
    
     console.log(`nama yang ada huruf A ${namatmn[a]}`)   
}
const akhir = namatmn.pop()
console.log (`nama terakhir adalah ${akhir}`)

 const hasil = namatmn.filter(nama => nama.toLocaleLowerCase().includes(`A`));
const last = hasil[hasil.length -1];

console.log(last)
