# CAPS
## Getting Started
### Requirements
For development, you will only need Node installed in your environment. Please use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Install
```
git clone git@github.com:Makster_04/caps.git
cd PROJECT
npm install
```
### Configure app
Any environment configuration steps.

### Start & watch
```
npm run dev
npm start
```
## Architecture 
![image](https://github.com/Makster04/caps/assets/86382359/1bc446a1-dd66-4ed0-8af6-5d4c806e1071)
![image](https://github.com/Makster04/caps/assets/86382359/b2f7ba8b-57d8-46df-9aad-e647c49cf2e9)
![image](https://github.com/Makster04/caps/assets/86382359/4b5660c3-7907-446e-bd85-77090d0d4408)


### Proposed File Structure
```
├── .github
│   ├── workflows
│   │   └── node.yml
├── driver
│   ├── handler.js
│   ├── index.js
│   └── driver-handler.test.js
├── vendor
│   ├── handler.js
│   ├── index.js
│   └── vendor-handler.test.js
├── .eslintrc.json
├── .gitignore
├── eventPool.js.
├── hub.js.
├── package.json
└── README.md
```
### Languages & tools
* JavaScript
* Jest
* Node
* Chance
  
## Change Log
0.0.1 - Initial release
