export default function logger(reducer) {
    return (prveState, action, args) => {

        console.group(action)
        console.log("Prve State :" ,prveState);
        console.log("Action Arguments  :" ,args); 
        const nextState = reducer(prveState, action, args);
        console.log("Next State :", nextState);
        console.groupEnd()
        return nextState
    }
}