export function titleCase (input: string): string {
    var splitStr = input.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(' ')
}
