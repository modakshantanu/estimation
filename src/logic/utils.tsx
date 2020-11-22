let superscripts = "⁰¹²³⁴⁵⁶⁷⁸⁹⁻"

export function format(num: number, max:number  = 1e6, min:number = 1e-3): string {
    if (num != 0 && (num < min || num > max)) {
        let exponent = Math.floor(Math.log10(num))
        let mantissa = num / Math.pow(10, exponent);
        let temp = exponent.toString();
        let exponentStr = ''
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] == '-') {
                exponentStr += superscripts[10]
            } else {
                exponentStr += superscripts[parseInt(temp[i])]
            }
        }

        return `${mantissa.toFixed(3)}×10${exponentStr}`
        
    }
    return num.toString()
}