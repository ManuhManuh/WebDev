/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'
import * as fs from 'node:fs';

const question = 
    {
      type: 'input',
      name: 'url',
      message: "Please enter the URL to make a QR code for: "
    }

    inquirer.prompt(question).then((answer) => {
        
        const { url } = answer;
        console.log (url);
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('my_image.png'));
        fs.writeFile("URL.txt",url, (err) => {
            if (err) throw err;
            console.log("The url has been added to the file");
          });
      });
