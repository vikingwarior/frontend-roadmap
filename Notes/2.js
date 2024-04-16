/**
 * To use a custom npm command ->
 * 
 * - add the command inside the "scripts" Object in the following format
 *      -> "command-name(for ex. start)" : "command-to-execute(for ex. npx parcel index.html)"
 * 
 * - now in the terminal instead of 'npx parcel index.html' you can use npm run start
 * 
 * - NOTE : 'start' is a special keyword in npm so you skip run while executing start command(i.e. directly type 'npm start' in the terminal) and this will still run as 'npm run start' but this shorthand only works for 'start' command for all other commands you will need to use 'npm run command-name'.
 */