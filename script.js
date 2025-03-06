//your JS code here. If required.
function getRandomTime() {
    return Math.random() * 2 + 1; // Between 1 and 3 seconds
}

function createPromise(index) {
    return new Promise(resolve => {
        let time = getRandomTime();
        setTimeout(() => resolve({ index, time: time.toFixed(3) }), time * 1000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let output = document.getElementById("output");
    
    let promises = [createPromise(1), createPromise(2), createPromise(3)];
    let startTime = performance.now();
    
    Promise.all(promises).then(results => {
        let totalTime = ((performance.now() - startTime) / 1000).toFixed(3);
        output.innerHTML = ""; // Clear loading row
        
        results.forEach(result => {
            let row = `<tr><td>Promise ${result.index}</td><td>${result.time}</td></tr>`;
            output.innerHTML += row;
        });
        
        output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
    });
});
