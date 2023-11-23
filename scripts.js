var allpoints = 0;
var checkex1 = false;
var checkex2 = false;
var checkex3 = false;
var checkex4 = false;
var checkex5 = false;
var checkex6 = false;

var stuName = "";
var stuFN = 0;

//#region Student info engine

function stuInfo() {
	stuName = document.getElementById("stuname").value;
	stuFN = document.getElementById("stufn").value;
}

//#endregion

//#region Exercise 1 engine

function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function checkQuestion1() {
    var gap1 = document.getElementById("gap1");
    var gap2 = document.getElementById("gap2");
    var gap3 = document.getElementById("gap3");
    var gap4 = document.getElementById("gap4");
    var drag1 = document.getElementById("drag1");
    var drag2 = document.getElementById("drag2");
    var drag3 = document.getElementById("drag3");
    var drag4 = document.getElementById("drag4");

    if(gap1.contains(drag3) && gap2.contains(drag1) && gap3.contains(drag4) && gap4.contains(drag2)) {
        document.getElementById("result").innerHTML = 'Вярно :D';
		if (checkex1 == false) {
			allpoints += 1;
			checkex1 = true;
		}
    }
    else {
        document.getElementById('result').innerHTML = 'Грешно!';
    }
}

//#endregion

//#region Exercise 2 engine

function Ex2() {
	//Answere 1
	var inp_a1_1 = document.getElementById("Ex2010"); //True
	var inp_a1_2 = document.getElementById("Ex2011");
	var inp_a1_3 = document.getElementById("Ex2012");
	
	//Answere 2
	var inp_a2_1 = document.getElementById("Ex2020");
	var inp_a2_2 = document.getElementById("Ex2021");
	var inp_a2_3 = document.getElementById("Ex2022"); //True
	
	//Answere 2
	var inp_a3_1 = document.getElementById("Ex2030");
	var inp_a3_2 = document.getElementById("Ex2031"); //True
	var inp_a3_3 = document.getElementById("Ex2032");
	
	//Answere 2
	var inp_a4_1 = document.getElementById("Ex2040"); //True
	var inp_a4_2 = document.getElementById("Ex2041");
	var inp_a4_3 = document.getElementById("Ex2042");
	
	//Answere true
	var trueans = (
		inp_a1_1.checked == true &&
		inp_a2_3.checked == true &&
		inp_a3_2.checked == true &&
		inp_a4_1.checked == true
	);
	
	if (trueans) {
		document.getElementById("resultEx2").innerHTML = 'Вярно :D';
		if (checkex2 == false) {
			allpoints += 1;
			checkex1 = true;
		}
	} else {
		document.getElementById("resultEx2").innerHTML = 'Грешно!';
	}
}

//#endregion

//#region Exercise 3 engine

function checkQuestion3() {
    var input = document.getElementById("question3_answer");
    if(input.value.toLowerCase() == 'котка' ) {
        document.getElementById("resultQuestion3").innerHTML = 'Вярно :D';
		if (checkex3 == false) {
			allpoints += 1;
			checkex1 = true;
		}
    }
    else {
        document.getElementById("resultQuestion3").innerHTML = 'Грешно!';
        return false;
    }
}

//#endregion

//#region Exercise 4 engine

function Ex4() {
	var inpName0 = document.getElementById("name0");
	var inpName1 = document.getElementById("name1");
	var inpName2 = document.getElementById("name2");
	
	//Answere - true
	var answere = (
		inpName0.value == 6000 && 
		inpName1.value == 1 && 
		inpName2.value == 3500
	);
	
	if (answere) {
		document.getElementById("resultEx4").innerHTML = 'Вярно :D';
		if (checkex4 == false) {
			allpoints += 1;
			checkex1 = true;
		}
	} else {
		document.getElementById("resultEx4").innerHTML = 'Грешно!';
	}
}

//#endregion

//#region Exercise 5 engine (only JS engine)

function Ex5() {
	var input0 = document.getElementById("rb0");
	var input1 = document.getElementById("rb1");
	var input2 = document.getElementById("rb2");
	var input3 = document.getElementById("rb3");
	
	var answere = input0.checked == true;
	
	if (answere) {
		document.getElementById("resultEx5").innerHTML = 'Вярно :D';
		if (checkex5 == false) {
			allpoints += 1;
			checkex1 = true;
		}
	} else {
		document.getElementById("resultEx5").innerHTML = 'Грешно!';
	}
}

//#endregion

//#region Exercise 6 engine (only JS engine)

function Ex6() {
	var inpPic0 = document.getElementById("cb0");
	var inpPic1 = document.getElementById("cb1");
	var inpPic2 = document.getElementById("cb2");
	var inpPic3 = document.getElementById("cb3");
	var inpPic4 = document.getElementById("cb4");
	var inpPic5 = document.getElementById("cb5");
	
	var answere = inpPic0.checked == true;
	
	if (answere) {
		document.getElementById("resultEx6").innerHTML = 'Вярно :D';
		if (checkex6 == false) {
			allpoints += 1;
			checkex1 = true;
		}
	} else {
		document.getElementById("resultEx6").innerHTML = 'Грешно!';
	}
}

//#endregion

//#region Result points engine

function FinalPoints() {
	if (stuName != "" && stuFN != 0) {
		document.getElementById("stuInfo").innerHTML = "Този тест е направен от: " + (stuName) + " с Фак.Н:" + (stuFN);
		document.getElementById("resultPoints").innerHTML = "Точките ти, за този тест са: " + (allpoints) + "/6 " + "(Ако мислиш, че не са правилилни, увери се, че си натиснал на всички въпроси бутона \"Провери\")";
	} else {
		document.getElementById("stuInfo").innerHTML = "Не си попълнил данните си! Върни се горе и го направи!";
		document.getElementById("resultPoints").innerHTML = "";
	}
}

//#endregion