#!/usr/bin/env node

// create a command line based game
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

const sleep = (ms = 5000) => new Promise((r) => setTimeout(r, ms));

async function runTimer() {
    let r;
    new Promise((r) => setTimeout(r, 1000));
    return r;
}

async function run() {
    let x = true;
    while (x) {
        console.log(chalk.green('Hello world!'));
        console.log(runTimer());
    }
    

    
}

function render(a,b,c,d,e,f,g,h,i) {
    console.clear();
    console.log("--------------");
    console.log("|              |");
    console.log("|              |");
}

await run()