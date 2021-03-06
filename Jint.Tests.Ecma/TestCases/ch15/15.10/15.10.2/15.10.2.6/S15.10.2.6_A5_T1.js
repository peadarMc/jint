// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Since assertion evaluating do not change endIndex repetition of assertion does the same result
 *
 * @path ch15/15.10/15.10.2/15.10.2.6/S15.10.2.6_A5_T1.js
 * @description Execute /^^^^^^^robot$$$$/.exec("robot") and check results
 */

__executed = /^^^^^^^robot$$$$/.exec("robot");

__expected = ["robot"];
__expected.index = 0;
__expected.input = "robot";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /^^^^^^^robot$$$$/.exec("robot"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /^^^^^^^robot$$$$/.exec("robot"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /^^^^^^^robot$$$$/.exec("robot"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /^^^^^^^robot$$$$/.exec("robot"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


