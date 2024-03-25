interface Mahasiswa{
   name: string,
   nilai: number,
   kehadiran: number
}



function kelulusan(mhs: Mahasiswa): String{
    if (mhs.nilai === 100 && mhs.kehadiran > 80) {
        return"SELAMAT ANDA LULUS DENGAN PREDIKAT CUMLAUDE";  
    }else if(mhs.nilai > 70 && mhs.kehadiran > 70){
        return "SELAMAT ANDA LULUS"
    }else{
        return"SELAMAT ANDA TIDAK LULUS";
    }}

    let mhs1: Mahasiswa = {
        name : "john",
        nilai: 80,
        kehadiran: 90
    }
    let mhs2: Mahasiswa = {
        name : "jane",
        nilai: 60,
        kehadiran: 65
    }
    let mhs3: Mahasiswa = {
        name : "alice",
        nilai: 100,
        kehadiran: 85
    }

console.log(`${mhs1.name} MENDAPATKAN NILAI ${mhs1.nilai} DAN KEHADIRAN ${mhs1.kehadiran}%, STATUS: ${kelulusan(mhs1)}`)
console.log(`${mhs2.name} MENDAPATKAN NILAI ${mhs2.nilai} DAN KEHADIRAN ${mhs2.kehadiran}%, STATUS: ${kelulusan(mhs2)}`)
console.log(`${mhs3.name} MENDAPATKAN NILAI ${mhs3.nilai} DAN KEHADIRAN ${mhs3.kehadiran}%, STATUS: ${kelulusan(mhs3)}`)
