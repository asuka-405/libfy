<div align="center" id="top"> 
  <img src="./ghost.png" alt="@asuka 405&#x2F;shadowfy" height="100" width="120" />

&#xa0;

  <!-- <a href="https://@asuka405&#x2F;shadowfy.netlify.app">Demo</a> -->
</div>

<h1 class="center">@asuka 405&#x2F;shadowfy</h1>

<div align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/asuka-405/shadowfy?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/asuka-405/shadowfy?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/asuka-405/shadowfy?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/asuka-405/shadowfy?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/@asuka-405&#x2F;shadowfy?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/@asuka-405&#x2F;shadowfy?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/@asuka-405&#x2F;shadowfy?color=56BEB8" /> -->
</div>

<hr>
<br>
<!-- Status -->

<h4 align="center"> 
	🚧  @asuka&minus;405&#x2F;shadowfy 🚀 Under construction...  🚧 </br>
</h4> 
<br>
<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/asuka-405" target="_blank">Author</a>
</p>

<br>

## 🎯 About

Write your HTML or JSX in a seperate file and use Shadowfy to convert them into basic web components </br>
This node module does not work 💀 </br>
We'll be publishing Shadowfy <a>v0.3</a>, beta version of Web component based web framework.💕

## ✨ Features

✅ JSX to Web Component\
✅ HTML containers into their seperate light DOM component

## 🚀 Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
  - [fs api](https://nodejs.org/api/fs.html)
- [Babel](https://expo.io/)
  - [@babel/core](https://babeljs.io/docs/babel-core)
  - [@babel/preset-react](https://babeljs.io/docs/babel-preset-react)

## ☑️ Requirements

Before starting ✅, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.
## 🧪 Sample execution

- Clone the repo from <a href="https://github.com/asuka-405/shadowfy">github</a>
- Pass the following arguments
  - src_dir : path to source directory
  - out_dir : path to compiled directory
  - Pass these arguments in the shadowfy or compiler function as an object
```
  Shadowfy({
      src_dir: "./path/to/src/dir",
      out_dir: './path/to/out/dir'
  })
```
- run the script
``` bash
# Install dependencies
$ yarn add @babel/core @babel/preset-react --dev

# run the script
$ node shadowfy.js
```
 - This will generate the compiled code to the given path.

## ⚙️ Tweak the code
Here's the structure of project so tha you can go and tweak the code:
```
shadowfy
├─ compilers
│  ├─ compiler.js
│  ├─ CompilerI.js
│  └─ templates.js
├─ ghost.png
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ README.md
├─ router
│  └─ router.js
└─ shadowfy.js

```
- The compiler takes the BFS approach
  - It reads files and dirs in first layer i.e "./src/"
  - if a directory comes, it pushes the path in queue, else it compiles the file
```
CompilerI.js
├─ src
├─ out
├─ queue -> contains list of directories to compile next
│  ├─ src -> src_dir
│  ├─ out -> out_dir
│  └─ out_name -> name of out dir extracted from out_dir
├─ convert() -> initiate compilation
├─ dir_proc() -> create and push new queue item
├─ file_proc() -> read & compile a file
├─ register_proc() -> register a file as a web component
├─ compile_proc() -> implemented by children classes
├─ getName() -> extract dir name from path

```

## 📝 License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.

Made with ❤️ by <a href="https://github.com/asuka-405" target="_blank">Suryansh</a>

&#xa0;

<a href="#top">Back to top</a>