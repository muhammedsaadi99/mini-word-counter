#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter an English paragraph:',
        }
    ]);
    const paragraph = answers.paragraph;
    const characterCount = paragraph.replace(/\s+/g, '').length;
    const wordCount = paragraph.split(/\s+/).filter(word => word.length > 0).length;
    console.log(`Character count (excluding spaces): ${characterCount}`);
    console.log(`Word count: ${wordCount}`);
}
main();
