//===============================================================
//
// © Kavan Mevada. 2016 : PORTFOLIO GRID
//
//================================================================
//
//
//div {
//	position: absolute;
//	width:250px;
//	padding: 2px;
//	transition: all 0.5s ease-out;
//}
//
//
function portfolio_grid() {

//*
//Initialization of Variables
//***************************
var cont_w = document.getElementById("grid_container").offsetWidth;
var blocks = document.getElementById("grid_container").children;

var gutter_h = 15;
//var gutter_v = 5;
//*
//Calculatting the number of column
//*********************************
var num_col = ( cont_w / blocks[0].offsetWidth);
var cols = Math.floor(num_col);
//var cols = 3;

var padding = cont_w - (cols * blocks[0].offsetWidth);
var padding_per = (padding / (cols+1));
if(padding_per<0){var padding_per = 0;}
var gutter_v = padding_per;
//*
//Initialization of arrays
//************************
var newleft = new Array();
var newtop = new Array();
//*
//Set fist three elements in row initial potitions
//************************************************
for(i=0;i<cols;i++){
	newtop[i] = gutter_h;
}

//-------------------------------------------------
//Setting the positions of Elements
//-------------------------------------------------
for(i=0;i<blocks.length;i++)
{
	//
	//Set first row with 0 height
	blocks[i].style.top = gutter_h+"px";
	newleft[0] = gutter_v;
	blocks[i].style.left = newleft[i]+"px";
	//Only first Element in next row
	if (i % cols == 0) {
		if(i>=cols){
			blocks[i].style.left = gutter_v+"px";
			newleft[i] = gutter_v;
			//Increase position with increasing element in same line
			newtop[i] = newtop[i-cols] + blocks[i-cols].offsetHeight + gutter_h;
			blocks[i].style.top = newtop[i] +"px";
		}
		if(blocks[i-1]){
			//Set Padding to last element in row
		}
	} else {
		if(blocks[i-cols]){
			//Setting height of element by element above on it
			newtop[i] = newtop[i-cols] + blocks[i-cols].offsetHeight + gutter_h;
			blocks[i].style.top = newtop[i] +"px";
		}
		//Increase position with increasing element in same line
		newleft[i] = newleft[i-1] + blocks[i-1].offsetWidth + gutter_v;
		blocks[i].style.left = newleft[i] +"px";
	}
	blocks[i].style.marginRight = gutter_h+"px";
}

}

//Event caller
//************
window.addEventListener("load", portfolio_grid, false);
window.addEventListener("resize", portfolio_grid, false);
