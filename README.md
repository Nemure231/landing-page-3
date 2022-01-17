## Documentation

This documentation is for developer only, who have understanding basic of the static website. But if you are not a developer and still want to manage this code alone by yourself, please read this documentation carefully.

## Introduction

Tailwindcss is CSS fremework that i installed through through npm (Node Package Manager), npm is a site or a tools that provides package publications for CSS and Javascript, packages is a well-made code function that already finished, so we can use that instantly in our coding. The base concept of npm is like Goggle Play Store, someone publish their package in npm and some people install the package to use it in their code. The problem is when the version of the package Tailwindcss is improved, the base code of Tailwindcss package might be updated, because Tailwindcss is an ongoing project and as the version goes on it will continue to improve.


## Installing npm and NodeJs

Npm is not a tools that can work in independently, npm need NodeJs for their base program languange to make it works. So please follow the instruction below:

1. Visit NodeJs Website in download page https://nodejs.org/en/download/
2. Choose the verison based on:
   - Your system operation, 
   - Your bit processors,
   - Choose the LTS version it's a stable version,
   - Choose the .msi extension,
3. After you downloaded it, time to install it:
   - Click the NodeJs installer file
   - System will ask if you want to run the software, click Run.
   - You will be welcomed to the Node.js Setup Wizard, click Next.
   - On the next screen, review the license agreement, click Next.
   - The installer will prompt you for the installation location. Leave the default location, unless you have a specific location to install it somewhere else –          then click Next.
   - The wizard will let you select components to include or remove from the installation. Accept the defaults by clicking Next.
   - Finally, click the Install button to run the installer. When it finishes, click Finish.
4. Always check if the NodeJs and npm already installed or not
   - Open your Command Prompt
   - Type "node -v", then click Enter, if you see node js version its already installed
   - Type "npm -v", then click Enter, if you see node js version its already installed
5. To updating this sofeware you just need to download the latest version and install it again, your system will replace the version again.


## Updateing your Tailwindcss


It's super easy to update your Tailwindcss version just with small npm command, however we also need to update production Tailwindcss with the new one, and update minify-css. What are we going to do is updating the base code of Tailwindcss. Because the production css and the base of Tailwindcss source is different file. The base Tailwindcss have a fully class function, even a function that we don't need to use, what a waste right? But with creating the production Tailwindcss, we just get waht we need to use, for example there is a 1000 class function on base Tailwindcss, but we just need 70 class function out of 1000 class. So we can change it form 1000/70 class to only 70/70 class, and make the size is more smaller to load on the website. So lets get started.

1. Update Base Tailwindcss
   - Open your project folder with File Explorer.
   - If you noticed, there is a file named "package.json", if the file is exists, then you are in the right location.
   - Open the package.json with your Notepad, or if you have Sublime Text 3/Visual Studio Code Code it's prettier and well-structured to see .json file with that      app.
   - In that package.json you will see the version of Tailwindcss, in the "devDependencies" line.
   - Compare your Tailwindcss version with the current version on their website: https://tailwindcss.com/docs/installation, you can see the version on the navbar
   - If your version is smaller, then you need to update.
   - Open your Command Prompt on your project location.
   - Type "npm update".
   - The loading progress will apper on your Command Prompt, wait until is finish.
   - And finally, you just updated your Base Tailwindcss.
   
2. Update Production Tailwindcss
   
   You need to update your Production Tailwindcss not only because there's a newers version of Base Tailwind, but everytime you changed/modified your index.html      file, you need to update the production file. Why? For example you need to use class "font-bold" to give your text bold effect, but in the Production              Tailwindcss, there's no class called "font-bold" we can't use that class, because in the previous work, I (as a Developer) didn't need a bold effect on the        website, IN THE 70/70 CLASS OF PRODUCTION CSS THERE'S NO FONT-BOLD. But in the Base Tailwindcss they have all of the class, including "font-bold". So all we      need to do is GET THE "FONT-BOLD" IN THE BASE TAILWINDCSS AND PUT IT INTO PRODUCTION CSS. Actually this method is called "Watch" more than "Update", so the        Tailwindcss can "Watch" our HTML file, and if there's a newcomer class, Production Tailwindcss will get that class in Base Tailwindcss and add that class          automatically. That's it's. Lets get started how to update/watch:
   
   - Open your project location, and go to this location Your_Project/public/assets/base/tailwindcss
   - You will see the "input.css" and "output.css", the input file is our base Tailwindcss that already updated before, and output will be our production file
   - Go back to again to root of your project location
   - You will see there is a file named "tailwind.config.js" that the setting file we needed for making production Tailwind
   - Open that file with your Notepad, or if you have Sublime Text 3/Visual Studio Code it's prettier and well-structured to see .js file with that app.
   - Take a look at ["./public/**/*.html"], that is your HTML file location, this fuction code [ **/*.html ] is going to find any HTML file in your public folder      so don't remove it. Public folder is the base location i always used store my HTML file, if you change or move the HTML file, you need to change the location      based on your own index.html location, for example if you move it on "/public/my_page" just change its to 
     ["./public/my_page/**/*.html"].
   - Close your tailwind.config.js if your HTML file in the right location
   - Open Command Prompt and type "npx tailwindcss -i ./public/assets/base/tailwindcss/input.css -o ./public/assets/base/tailwindcss/output.css --watch" The first      location is your input.css location and the second is your output.
   - After that. just click enter and now your Tailwindcss is begin to do the watch process
   
Note:
Remember, the watch process is always on when you actived it, don't close your Command Prompt when your Tailwind in watch mode, unless you turn it on off. But why it's always on? Because the Developer always need to get the new class when they are create the website. Everytime you add/remove class in your index.html and save it again, Tailwindcss will watch  
   
   

 
   
   
   
   
   
   
   
   
   
   **[Vehikl](https://vehikl.com/)**
