function a(v1) {
    console.log('function a(v1) called: '+v1);
}

a(1);
a();
console.log('______');

function a(v1,v2) {
    console.log('function a(v1,v2 called : '+v1 + ''+v2);
}

a(1);
a(1,2);
a(1,2,3);
a();