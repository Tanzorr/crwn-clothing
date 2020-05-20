import React from "react";

class ErrorBounderyComponent  extends React.Component{
    constructor() {
        super();

        this.state={
            hasErrored:false
        }
    }
    static getDerivedStateFromError(error){
        //process the error
        return {hasErrored: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

    render() {
        if (this.state.hasError){
            return <div>
                Something whent wrong...
            </div>
        }else {
            return this.props.children
        }


    }

}

export  default  ErrorBounderyComponent