# To write test cases following is required:

 1. Install React Testing Library (npm i -D @testing-library/react) ~ Library to write Test Cases

 2. Install jest (npm i -D jest)
 3. Configure Babel:
    - Install babel dependencies for jest (npm install --save-dev babel-jest @babel/core @babel/preset-env)
    - Update Babel config file
 4. Override parcel configuration to disable babel transpilation
 5. Initialize Jest (npx jest --init) ~ can be later modified in 'jest.config.js'
 6. Install jsdom (npm i -D jest-environment-jsdom) ~ Environment that emulates the behavior of an actual DOM structure.
 7. Create a folder with name '__test__'.
 8. Inside '__test__' folder, you can write files with extn *.test.js/ts or *.spec.js/ts
 9. execute test cases with "npm run test".


 ## To debug with JSX

# Significance of '__*__':

 Called as dunder, Dunder is a reserved keyword, that is used to signify that the folder contains some essential info. In this case, it contains our test case files. 