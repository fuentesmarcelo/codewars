// PREP 2024-07-05
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.


// P: dna
// R: return DNA str into RNA

// my solutions
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}

const DNAtoRNA = dna => dna.replace(/T/g, 'U');