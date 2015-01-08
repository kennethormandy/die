var Spinner = require('cli-spinner').Spinner;
var spinner = new Spinner('%s');

var pattern = '⚀⚁⚂⚃⚄⚅';

spinner.setSpinnerString(pattern);
spinner.setSpinnerDelay(100);
spinner.start();
