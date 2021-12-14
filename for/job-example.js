var N = 5;

for(i = 0; i <= N; i++){
    let text = '';
    for(j = 0; j < N; j++) {
        if (i > j) {
            text += '1';
        } else {
            text += '0';
        }
    }
    console.log(text);
}