import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CourseCard from './CourseCard';
import SearchBox from './SearchBox';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function GetCell(day, time){
  return document.getElementById(day+time);
}


function AddEvent(course_info,day, time, length, offset){
    day="Monday";
    time="8:00";
    length=60;
    offset=20;
    course_info="cs330";

	let cell=GetCell(day, time);

	if (cell){
        if (cell.innerHTML!==``){
            alert("course conflict");
        }
        else{
            console.log(cell);
            let height=length/60*50;
            offset=offset/60*50;
    		cell.innerHTML+=`<div class="course" style="height:${height}px; margin-top:${offset}px"> ${course_info} </div>`;
    		return;
        }
	}
	else{
        alert("none such course!");
	}
}

function DeleteEvent(day, time){
    let cell=GetCell(day, time);

	if (cell){
        console.log(cell);
		cell.innerHTML=``;
		return;
	}
	else{
        alert("none such course!");
	}
}

function IsEmptyCell(day, time){
    let cell=GetCell(day, time);
    return (cell.innerHTML===``);
}


export {AddEvent,DeleteEvent,IsEmptyCell}
