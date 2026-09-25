const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#460b46", "#000000", "#808080"];
const exclude = [4, 6, 7, 9]

for (let i = 1; i <= 9; ++i) {
    if (!exclude.includes(i)) {
        document.querySelector(`#pixel${i}`).style.backgroundColor = colors[i - 1];
    }
}