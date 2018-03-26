const svgpath = require('svgpath');

const root = document.querySelector('.js-root');
const loadPath = 'M425.39,126.54c-22.43-1.27-44.68-14.38-62.7-26.79a216.74,216.74,0,0,1-31.56-26.32c-9.31-9.45-16.41-20.53-25.24-30.35-36.78-40.88-97.12-54.45-147.81-33a131.7,131.7,0,0,0-63.74,57.7H210.47c3.08,0,7.32-.68,9.49,2,4.12,5.14-1.73,8.73-6.31,8.78-26.45.3-132.86-.33-159.6,0-17,.21-33.58,10.78-43.22,24.33-15.66,22-13.88,52.86,4.13,73A59.14,59.14,0,0,0,32.52,189.4h68c2.6,0,6-.57,8.57.14,4.73,1.32,5.66,7.88,1.14,10.12a9.09,9.09,0,0,1-4.11.55c-12.06.25-58.84,0-70.15,0a58.71,58.71,0,0,0-1.73,107.5h67.88c3.16,0,7.71-.77,9.95,2,4.61,5.76-2.4,8.78-7,8.78H34.22A59.42,59.42,0,0,0,0,370.26c-.74,22.6,12.36,44.12,32.54,54.17,12.78,6.37,25.82,6.14,39.49,6.14H658.9V127.08S425.43,126.72,425.39,126.54Z';
const pathDaddy = new Vue({
    el: root,
    data: {
        x: 0,
        y: 0,
        scale: 1,
        path: loadPath,
        round: 10,
        rotate: 0,
        mirror: false,
        transformed: ''
    },
    methods: {
      pathMethod: function () {
        this.path;
        this.updateEverything(this.$data);
      },
      scaleMethod: function () {
        this.scale;
        this.updateEverything(this.$data);
      },
      translateXMethod: function () {
        Number(this.x);
        this.updateEverything(this.$data);
      },
      translateYMethod: function () {
        Number(this.y);
        this.updateEverything(this.$data);
      },
      rotateMethod: function () {
        this.rotate;
        this.updateEverything(this.$data);
      },
      mirrorMethod: function() {
        this.mirror = this.mirror ? false : true;
        this.scale;
        this.updateEverything(this.$data);
      },

      updateEverything: function({path, x, y, scale, mirror, round, rotate}) {
        const scaleFirstValue = mirror ? Number(-scale): scale;
        const scaleSecondValue = mirror ? Number(scale) : scale;

        const transformed = svgpath(path)
        .scale(scaleFirstValue, scaleSecondValue)
        .translate(Number(x),Number(y))
        .rel()
        .round(round)
        .rotate(rotate)
        .toString()
        
        this.transformed = transformed;
      }
    },
    computed: {
        outputTextarea() {
            return this.transformed
        }
    }
  })
 
  pathDaddy;