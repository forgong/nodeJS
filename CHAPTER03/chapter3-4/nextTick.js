// process.nextTick(콜백)
setImmediate(() => {
    console.log('immediate');
});
ProcessingInstruction.nextTick(() => {
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));
