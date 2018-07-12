var Vector = require('./vector');

var circle = Vector.el('circle', {
           cx: "50%",
           cy: "50%",
           r: 200,
           fill: '#fff',  
       });

var triangle = Vector.el('polygon', {
           points: "250,60 100,400 400,400",
           fill: "#fff"
});

var svg = Vector.el('svg', {
    width: "500px",
    height: "500px",
    xmlns: 'http://www.w3.org/2000/svg',
},      
    //    Vector.el('rect', {
    //        x: 0,
    //        y: 0,
    //        width: '100%',
    //        height: '100%',
    //        fill: '#000',

    //    }),
       triangle
       
    );


document.getElementById('wrapper').appendChild(svg);
