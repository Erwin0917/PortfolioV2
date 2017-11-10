import "../sass/main.scss";

//import 'es6-promise/auto';

import React from 'react';
import ReactDOM from 'react-dom';

/* Tooltips init */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/* Top Bar Scripts */
import {AdditionalControls} from "./topBar"

/* Animations */
import {navAnimation} from "./animations"
navAnimation.init();
