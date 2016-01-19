  Giphy App 
=============
  Fetches the images from Giphy Repository as per the search   criteria provided
------------------------------------------------------------------------------
```
The App Users following Node Modules
1) Gulp ( Its similar to Grunt but much efficient than Grunt)
2) Bower
3) Browserify
4) Uglif
```

Installation Steps#
-------------------
1: Install [Node.JS](https://nodejs.org/dist/v4.2.4/node-v4.2.4-x64.msi)
2: Download and extract the files to any of the folder
3: Open command prompt and ycd(change directory) to the folder where the files were extracted 
4: Type `npm install` and hit enter it will then take couple of mins to install all the node pkg dependencies
5: Once all the dependencies are installed just type in `gulp` it will take care of running `bower`, `browserify`, `pipe`, `uglify` actions and will open up the application automatically with in the browser

```
Note: Initially there wont be 'UAT' folder with the downloaded app once you are done with the above `npm install` 
and `gulp` command executions it will create a UAT folder and will deploy all the dependencies, html files and 
node startup file into it so that if all well then the same folder can be deployed directly to production. 
```
