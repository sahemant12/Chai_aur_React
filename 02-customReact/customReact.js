// In this program we are making our own React.


// 1. This is Component/fn that we get to render in root element. This is how React see the component element.
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "click me to visit google",
}
function Convert(){ // this convert into above at the end after parse.
    return(
        <><a target="_blank" href="https://google.com">click me to visit google</a></>
    )
}
// 2. This is the root where we will render our all component.
const mainContainer = document.getElementById("root");


// 3. Make a render fn that render the component to the root element.
customRender(reactElement, mainContainer); // 1st argu: component that will render. // 2nd argu: place where we want to render component.

function customRender(reactElement, container){

    //good, but not optimize code
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute("href", reactElement.props.href);
    // domElement.setAttribute("target", reactElement.props.target);

    // container.appendChild(domElement);


    //optimize code
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(let prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// 4. Bundler help to convert syntax of fn into component syntax.
// E.g: function App(){return (<></>)} ----->   <App/>
// Also, after parse this fn converted into above object.
