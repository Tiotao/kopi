export class MainController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1452325029104;
    this.toastr = toastr;
    this.activate($timeout, webDevTec);
    this.crossword = this.initCrossword();
    console.log(this.crossword);
  }

  initCrossword(){
    const HORIZONTAL_ENTRY = 0, 
          VERTICAL_ENTRY = 1;

    function Sr(x, y){
      return new SpaceReference(x, y);
    };

    var crossword = new Crossword(11);
    // h1
    var r0c2 = Sr(0, 2),
        r0c3 = Sr(0, 3),
        r0c4 = Sr(0, 4),
        r0c5 = Sr(0, 5),
        r0c6 = Sr(0, 6),
        r0c7 = Sr(0, 7),
        r0c8 = Sr(0, 8),
        r2c3 = Sr(2, 3),
        r2c4 = Sr(2, 4),
        r2c5 = Sr(2, 5),
        r2c6 = Sr(2, 6),
        r4c3 = Sr(4, 3),
        r4c4 = Sr(4, 4),
        r4c5 = Sr(4, 5),
        r4c6 = Sr(4, 6),
        r4c7 = Sr(4, 7),
        r4c8 = Sr(4, 8),
        r4c9 = Sr(4, 9),
        r4c10 = Sr(4, 10),
        r7c1 = Sr(7, 1),
        r7c2 = Sr(7, 2),
        r7c3 = Sr(7, 3),
        r7c4 = Sr(7, 4),
        r7c5 = Sr(7, 5),
        r7c6 = Sr(7, 6),
        r7c7 = Sr(7, 7),
        r7c8 = Sr(7, 8),
        r7c9 = Sr(7, 9),
        r7c10 = Sr(7, 10),
        r7c11 = Sr(7, 11),
        r9c6 = Sr(9, 6),
        r9c7 = Sr(9, 7),
        r9c8 = Sr(9, 8),
        r9c9 = Sr(9, 9),
        r10c0 = Sr(10, 0),
        r10c1 = Sr(10, 1),
        r10c2 = Sr(10, 2),
        r11c3 = Sr(11, 3),
        r11c4 = Sr(11, 4),
        r11c5 = Sr(11, 5),
        r11c6 = Sr(11, 6),
        r11c7 = Sr(11, 7),
        r11c8 = Sr(11, 8),
        r11c9 = Sr(11, 9),
        r5c2 = Sr(5, 2),
        r6c2 = Sr(6, 2),
        r8c2 = Sr(8, 2),
        r9c2 = Sr(9, 2),
        r10c2 = Sr(10, 2),
        r1c4 = Sr(1, 4),
        r3c4 = Sr(3, 4),
        r5c4 = Sr(5, 4),
        r6c4 = Sr(6, 4),
        r8c6 = Sr(8, 6),
        r10c6 = Sr(10, 6),
        r3c7 = Sr(3, 7),
        r5c7 = Sr(5, 7),
        r1c10 = Sr(1, 10),
        r2c10 = Sr(2, 10),
        r3c10 = Sr(3, 10),
        r5c10 = Sr(5, 10),
        r6c10 = Sr(6, 10),
        r8c11 = Sr(8, 11),
        r9c11 = Sr(9, 11)

    var e1 = new Entry(HORIZONTAL_ENTRY, 'MICHAEL'), 
        e2 = new Entry(HORIZONTAL_ENTRY, 'TEHO'), 
        e3 = new Entry(HORIZONTAL_ENTRY, 'TEHTARIK'), 
        e4 = new Entry(HORIZONTAL_ENTRY, 'KOPICKOSONG'), 
        e5 = new Entry(HORIZONTAL_ENTRY, 'PENG'), 
        e6 = new Entry(HORIZONTAL_ENTRY, 'GAR'), 
        e7 = new Entry(HORIZONTAL_ENTRY, 'DINOAUR');

    var e8 = new Entry(VERTICAL_ENTRY, 'LAOHOR'), 
        e9 = new Entry(VERTICAL_ENTRY, 'CLEMENTI'), 
        e10 = new Entry(VERTICAL_ENTRY, 'KOPIO'), 
        e11 = new Entry(VERTICAL_ENTRY, 'DAI'), 
        e12 = new Entry(VERTICAL_ENTRY, 'JACKSON'), 
        e13 = new Entry(VERTICAL_ENTRY, 'GAU');

    e1.setSpaceRefs([r0c2, r0c3, r0c4, r0c5, r0c6, r0c7, r0c8]);
    e2.setSpaceRefs([r2c3, r2c4, r2c5, r2c6]);
    e3.setSpaceRefs([r4c3, r4c4, r4c5, r4c6, r4c7, r4c8, r4c9, r4c10]);
    e4.setSpaceRefs([r7c1, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7, r7c8, r7c9, r7c10, r7c11]);
    e5.setSpaceRefs([r9c6, r9c7, r9c8, r9c9]);
    e6.setSpaceRefs([r10c0, r10c1, r10c2]);
    e7.setSpaceRefs([r11c3, r11c4, r11c5, r11c6, r11c7, r11c8, r11c9]);
    e8.setSpaceRefs([r5c2, r6c2, r7c2, r8c2, r9c2, r10c2]);
    e9.setSpaceRefs([r0c4, r1c4, r2c4, r3c4, r4c4, r5c4, r6c4, r7c4]);
    e10.setSpaceRefs([r7c6, r8c6, r9c6, r10c6, r11c6]);
    e11.setSpaceRefs([r3c7, r4c7, r5c7]);
    e12.setSpaceRefs([r1c10, r2c10, r3c10, r4c10, r5c10, r6c10, r7c10]);
    e13.setSpaceRefs([r7c11, r8c11, r9c11]);

    crossword.setVerticalEntries([e1, e2, e3, e4, e5, e6]);
    crossword.setHorizontalEntries([e8, e9, e10, e11, e12, e13]);

    return crossword;
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  isEmptySpaceClass(space){
    if (space){
      return 'empty'
    } else {
      return ''
    }
  }

}
