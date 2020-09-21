const ws = new WeakSet(); const foo = {}; 
const bar = {}; ws.add(foo); 
ws.add(bar); ws.has(foo); // true 
ws.has(bar); // true 
ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained