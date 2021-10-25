// File: index.html 
// GUI Assignment: Create a multiplication table using the given input from user.
// Ishan Patel, Umass Lowell Computer Science,
// ishankumar_patel@student.uml.edu
// Copyright (c) 2021 by Ishan. All rights reserved. May be freely copied or excerpted for educational 
// purposes with credit to Ishan. 
// Updated on Oct 25, 2021 at 4:25pm


// Variables for the input field. 0 as default values
var maxColVal = 0;
var minColVal = 0;
var maxRowVal = 0;
var minRowVal = 0;

function submitPressed() {
    // Read the data from input fields that the user enters
    maxColVal = parseInt(document.getElementById('maxColVal').value);
    minColVal = parseInt(document.getElementById('minColVal').value);
    maxRowVal = parseInt(document.getElementById('maxRowVal').value);
    minRowVal = parseInt(document.getElementById('minRowVal').value);

    // Check for valid input. If valid input then do calculations
    if(validInput()) {
        document.getElementById('errorHeader').innerHTML = "";
        doCalculations();
    }
}

// Check if the entered data from user is valid. Return false if its not otherwise true.
//      Check for the range and if min > max for both row and col values
function validInput() {
    if(maxColVal > 50) {
        document.getElementById('errorHeader').innerHTML = "Error: Max column must be less than 50";
        var multTable = document.getElementById('table-elm');
        multTable.innerHTML = "";
        return false;
    } 
    if(minColVal < -50) {
        document.getElementById('errorHeader').innerHTML = "Error: Min column must be greater than -50";
        var multTable = document.getElementById('table-elm');
        multTable.innerHTML = "";
        return false;
    }
     if(maxRowVal > 50) {
        document.getElementById('errorHeader').innerHTML = "Error: Max row must be less than 50";
        var multTable = document.getElementById('table-elm');
        multTable.innerHTML = "";
        return false;
    } 
    if(minRowVal < -50) {
        document.getElementById('errorHeader').innerHTML = "Error: Min row must be greater than -50";
        var multTable = document.getElementById('table-elm');
        multTable.innerHTML = "";
        return false;
    }

    if(minRowVal >= maxRowVal) {
        document.getElementById('errorHeader').innerHTML = "Error: Min row value must be less than max row value";
        var multTable = document.getElementById('table-elm');
        multTable.innerHTML = "";
        return false;
     }
  
    if(minColVal >= maxColVal) {
        document.getElementById('errorHeader').innerHTML = "Error: Min column must be less than max col value";
        var multTable = document.getElementById('table-elm');
        multTable.innerHTML = "";
        return false;
    }

    return true;
}

// Create the table and set the table to the HTML element using id
function doCalculations() {
    // Get reference to the table from HTML 
    var tableDiv = document.getElementById('table-div');
    var multTable = document.getElementById('table-elm');
    multTable.innerHTML = "";

    //Create the first row that will be static when scrolling. 
    // This is not the acutal calculations. Just the range of number the user enters.
    var firstTr = multTable.insertRow();
    for(var i = minColVal; i <= maxColVal; i++) {
        // Top left block is empty
        if(i == minColVal) {
            var th = document.createElement('th');
            th.innerHTML = ' ';
            firstTr.appendChild(th);
        }
        var th = document.createElement('th');
        th.innerHTML = i;
        firstTr.appendChild(th);
    }
    // Do the calculaiton for each box, create cell, and append each to the table
    for(var i = minRowVal; i <= maxRowVal; i++) {
        var tr = multTable.insertRow();
        for(var j = minColVal; j <= maxColVal; j++) {
            if(j == minColVal) {
                // Crate the first cell of each row. This is the first column that will be static when scrolling.
                // This is not the acutal calculations. Just the range of number the user enters.
                var th = document.createElement('th');
                th.innerHTML = i;
                tr.appendChild(th);
            }
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(i * j));  
        }
    }
}
