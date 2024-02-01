/**
 *    operation   
 *        |     package name  
 *        |         |
 *        v         v
 * npm install -D parcel
 *  ^           ^
 *  |           |
 *  |   mode of installtion
 *  |     (development)
 * package manager
 */


/* Caret(^) and Tilde(~) in versions of dependencies inside package.json
* ^ -> flag that automatically install the latest version existing version of the dependency if there minor version update but won't update if there is a major version change
* For ex -> ^9.4.2 will be automatically updated to ^9.4.3 then, 9.4.4 and so on. But will not update to 9.5.0
*
* ~ -> flag that automatically install the latest version existing version of the dependency for all, minor as well as major version update.
*/

/**
 * Difference in package.json and package-lock.json
 * 
 * package.json -> used for project configuration, dependency management, and version management.
 * package-lock.json -> used for dependency locking, version consistency, and improved installation speed
 */

/**
 * npm -> install package
 * npx -> execute package
 */

// Creating a environment for react based websites :

/**
 *  [1] npm init -> give the initialization details
 *  [2] npm i -D parcel
 *  [3] npx parcel {starting-file-of-the-project}
 */