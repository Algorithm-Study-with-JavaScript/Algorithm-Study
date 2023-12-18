function a() {
  console.log("a");
  Promise.resolve().then(inA);
}

function b() {
  console.log("b");
  inB();
}

function c() {
  console.log("c");
  setTimeout(inC, 0);
}

function inA() {
  console.log("inA");
}

function inB() {
  console.log("inb");
}

function inC() {
  console.log("inC");
}

a();

setTimeout(b, 0);

Promise.resolve().then(c);
