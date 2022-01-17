## Documentation

This documentation is for Developer only, who have understanding basic Tailwindcss and static website. But if you are not a Developer and still want to manage this code alone by yourself, please read this documentation carefully.


## Introduction

Tailwindcss is CSS fremework that i installed through npm (Node Package Manager), npm is a site or a tools that provides package publications for CSS and Javascript, packages is a well-made code function that already finished, so we can use that instantly in our coding. The base concept of npm is like Goggle Play Store, someone publish their package in npm and some people can install the package to use it in their code. The problem is when the version of the package Tailwindcss is updated you always need the latest version of it right?

## Install Code Editor

If you are not Developer, you will need Code Editor App, because you need to open your own code. If you have mid-tier laptop/computer i sugess you to install Sublime Text 3 as your Code Editor, because that the lightweight app i ever use. And if you have high-tier laptop/computer just install Visual Studio Code, that is the most feature-rich code editor.


## Installing npm and NodeJs

Npm is not a tools that can work in independently, npm need NodeJs for their base program languange to make it works. So please follow the instruction below:

1. Visit NodeJs Website in download page https://nodejs.org/en/download/
2. Choose the verison based on:
   - Your system operation, 
   - Your bit processors,
   - Choose the LTS version it's a stable version,
   - Choose the .msi extension,
3. After you downloaded it, time to install:
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


It's super easy to update your Tailwindcss version just with small npm command, however we also need to update production Tailwindcss with the new one, and update minify-css. This is the small roadmap to update Tailwind css:
1. Updating Base Tailwindcss
2. Updating Production Tailwindcss
3. Updating Minify Tailwindcss


## Updating Base Tailwindcss

What are we going to do is updating the base code of Tailwindcss. Because the production css and the base of Tailwindcss source is different file.

1. Update Base Tailwindcss
2. Open your project folder with File Explorer.
3. If you noticed, there is a file named "package.json", if the file is exists, then you are in the right location.
4. Open the package.json with your Sublime Text 3/Visual Studio Code
5. In that package.json you will see the version of Tailwindcss, in the "devDependencies" line.
6. Compare your Tailwindcss version with the current version on their website: https://tailwindcss.com/docs/installation, you can see the version on the navbar
7. If your version is smaller, then you need to update.
8. Open your Command Prompt on your project location.
9. Type "npm update".
10. The loading progress will apper on your Command Prompt, wait until is finish.
11. And finally, you just updated your Base Tailwindcss.
   
   
## Updateing Production Tailwindcss

The base Tailwindcss have a fully class function, even a function that we don't need to use, what a waste right? But with creating the Production Tailwindcss, we just get what we need to use, for example there is a 1000 class function on base Tailwindcss, but we just need 70 class function out of 1000 class. So we can change it form 1000/70 class to only 70/70 class, and make the size is more smaller to load on the website.
   
You need to update your Production Tailwindcss not only because there's a newers version of Base Tailwind, but everytime you changed/modified your index.html      file, you need to update the production file. Why? For example you need to use class "font-bold" to give your text bold effect, but in the Production              Tailwindcss, there's no class called "font-bold" we can't use that class, because in the previous work, I (as a Developer) didn't need a bold effect on the        website, IN THE 70/70 CLASS OF PRODUCTION CSS THERE'S NO FONT-BOLD. But in the Base Tailwindcss they have all of the class, including "font-bold". So all we      need to do is GET THE "FONT-BOLD" IN THE BASE TAILWINDCSS AND PUT IT INTO PRODUCTION CSS.

Actually this method is called "Watch" more than "Update", so the Tailwindcss can "Watch" our HTML file, and if there's a new class, Production Tailwindcss will get that class in Base Tailwindcss and add that class automatically. That's it's. Lets get started how to update/watch:
   
1. Open your project location, and go to this location Your_Project/public/assets/base/tailwindcss
2. You will see the "input.css" and "output.css", the input file is our base Tailwindcss that already updated before, and output will be our production file
3. Go back again to root of your project location
4. You will see there is a file named "tailwind.config.js" that the setting file we needed for making production Tailwindcss
5. Open that file with your Sublime Text 3/Visual Studio Code
6. Take a look at ["./public/**/*.html"], that is your HTML file location, this fuction code "**/*.html" is going to find any HTML file in your public folder        so don't remove it. Public folder is the base location i always used to store my HTML file, if you change or move the HTML file, you need to change the            location based on your own index.html location, for example if you move it on "/public/my_page" just change to ["./public/my_page/**/*.html"]
7. Close your tailwind.config.js if your HTML file in the right location
8. Open Command Prompt and type "npx tailwindcss -i ./public/assets/base/tailwindcss/input.css -o ./public/assets/base/tailwindcss/output.css --watch" The first      location is your input.css location and the second is your output.
9. After that. just click enter and now your Tailwindcss is begin to do the watch process
   
Note:
Remember, the watch process is always on when you activated it, don't close your Command Prompt when your Tailwind in watch mode, unless you turn it on off. But why it's always on? Because the Developer always need to get the new class when they are create the website. Everytime you add/remove class in your index.html and save it again, Tailwindcss will add/remove your class in Production Tailwindcss.

Tips:
Do you think the syntax for watch Tailwindcss is too long? Actually you can short it. If you open your "package.json" file, you will noticed in the "scripts" line, there's a same syntax but warped with: "tailwind-watch": "npx tailwindcss -i ./public/assets/base/tailwindcss/input.css -o ./public/assets/base/tailwindcss/output.css --watch". If you type "npm run tailwind-watch" in Command Prompt, Tailwindcss will run the watch process. Why? because i am alreay made my own npm function that called "tailwind-watch" the inside of that function is the long Tailwindcss watch syntax.


## Updateing Minify Tailwindcss
   
Minify CSS is smaller version of css file, this is the best type of CSS if you want to put in the production use in my opinion. The main different from normal    CSS is the extension name, Minify CSS have extension name .min.css. There's a lot of website in the internet can minify your css just search it on goggle, you    can use their service, lets get started:
   
1. Find a website that provide minify-css service
2. If you ask me, i will choose https://www.toptal.com/developers/cssminifier/ because compare to other site, that site didn't have ads, have a simple page, and      large textbox perfect to copy my css
3. Open your output.css that already through updated and watch process
4. Copy all of the output.css
5. Paste it into input CSS
6. Then click "Minify" button
7. Thats it, you will see your minify version in the right textbox
8. Copy that result
9. Open My_Project/public/base/tailwindcss
10. Find output.min.css
11. Open that file
12. Paste your minify-css result to repalace the old with new one


## Updateing Minify Alpinejs

Alpine favorite Javascript Framework, if you find Alpinejs in my code, of course you need to update it if you want. But mostly, i use Alpinejs because i need more complex Javascript case. Let's get started:

1. Open your project location
2. Open public/assets/base
3. If you find alpinejs folder you need to continue this guide, if you don't then you good go close your project
4. When you open the alpinejs folder you will see alpine.min.js
5. Open that file with SUblime Text 3/Visual Studio Code, take a look at the version your Alpinejs version
6. Open Alpinejs site in the instalation page https://alpinejs.dev/essentials/installation to see the latest version
7. Compare both version file, if your version is smaller, then you need to update.
8. Open again your alpine js file with Sublime Text 3/Visual Studio Code in your_project/public/assets/base/alpinejs
9. Find "alpine.min.js" file
10. Open it
11. Delete all of the old code
12. Open their latest link version https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js
13. Copy all of that code in that website
13. Paste it in your alpine.min.js 
14. Done








