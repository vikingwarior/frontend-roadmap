/*
    Good Practices :
    
    -> Always store the code files in a src folder
    -> Separate folder should be created for all the components
        -> Every component should have it's separate file
    -> All the other common dependencies(not modules) should be stored inside a utilities/commons folder
    -> All the hardcoded strings/values should be stored inside a separate constants file
*/


/*
    Types of Exports :

    Default export ->
        Syntax -> export default {object/variable name}

        Functioning ->
        When default export is used in a file, the argument mentioned inside the export statement is sent where the given module is imported.

        Can be used once per file.

    Named export ->
        Syntax -> 
            export const argument1 = value1;
            export const argument2 = value2;

        Functioning ->
        This type of export is used when there are multiple entities that are needed to be exported depending on the use case.

        When this type of file is imported, all the entities with export keyword are nested in an objectt and can be decomposed at the source of import call.

        A file can have multiple Named exports

        For example :

        import {argument1} from 'file-path/file-name'

    NOTE :

    Both import statements can be used in one file as well, if the user does not specify their requirement, it would get default object/variable. 
 */

/*
    React Hooks ->
    Javascript functions present in React Utility Library that helps UI layer to adapt to changes in the data layer and vice-versa. 

    To import a hook:
    import {hookName} from 'react'

    Popular React Hooks:
    --------------------

    useState() =>
    Creates a state object that maintains the state of the component upon which the hook is applied.

    Whenever a state variable changes, React will automatically re-render the component.

    Iniitalizing a state variable.




*/
