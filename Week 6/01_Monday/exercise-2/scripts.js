let matrix = [
    ["A","B","C"],
    ["D","E"]
];

console.log(transpose(matrix));

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    /**
     * missing:
     * check for each row what the max of cols is
     * fill up empty cells with empty string ""
     */

    for (let j = 0; j < cols; j++) {
        result[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}