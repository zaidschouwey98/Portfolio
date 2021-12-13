var particles = Particles.init({
    selector: '.secondbackground',
    color: ['#DA0463', '#404B69', '#DBEDF3'],
    connectParticles: true
});


anime({
    targets: '#testsss',
    translateX: 250, // -> '250px'
    rotate: 540 // -> '540deg'
  });