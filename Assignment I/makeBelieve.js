

/*  ========================================================
 *
 * 		    T-427-WEPO Web Programming II
 * 		    Reykjavik University
 * 		    Assignment 1: MakeBelieve
 * 		    Assignment Due: 21.01.2018
 * 		    Authors:    Darri Valgarðsson
 *                      Edda Steinunn
 *                      Sigurður Marteinn Lárusson
 *
    ======================================================== */

(function () {

        /*      1.  DEFINING THE "__" KEYWORD */
        window.__ = makeBelieveFunctionality;

        function makeBelieveFunctionality (selector) {
    
        /*      2.  THE QUERY SELECTOR
         *      Returned along with other methods */
        let elements = document.querySelectorAll(selector);
    
        return new MakeBelieveObject(elements);
    }

    function MakeBelieveObject (queryElements) {

        this.elements = queryElements;

        this.empty = ()=> {
            if ((this.elements === undefined) || (this.elements === null)) {
                return true;
            }
            return this.elements == {};//_isEmpty(this.elements);
        }

        /*      3.  THE PARENT SELECTOR
         *      Returns parent of selector
         *      If nested selector is provided within this method,
         *      it returns parent only if it matches that selector
         *      Otherwise an empty object */
        this.parent = (selector) => {
    
            let children = this.elements;

            if(this.empty()) { return new MakeBelieveObject({}); }
    
            if (children.length > 1)        { 
                let parentList = _getParentList (children, selector); 
                return new MakeBelieveObject(parentList);
            }
            else if (children.length == 1)  { 
                let parent =  _getParent (children[0], selector); 
                return new MakeBelieveObject(parent);
            }

            return new MakeBelieveObject({});
        };
        // Parent helper function 
        let _getParent = (child, nestedSelector) => {
    
            if(nestedSelector !== undefined)    { return _checkParentSelector(child.parentNode, nestedSelector); }
            else                                { return child.parentNode; }
        }
        // Parent helper function 
        let _checkParentSelector = (parent, nestedSelector) =>  {   
    
            if ( parent.matches(nestedSelector) ) { return parent; }
    
            return { };
        }
        // Parent helper function 
        let _getParentList = (children, nestedSelector) => {
            
            let parentList = [ ];
            for( let i = 0; i < children.length; i++ ) {
    
                    let currParent = _getParent (children[i], nestedSelector);
                    if ( _isEmpty(currParent) )  { continue; }
                    else                        { parentList.push(currParent); }
            }
    
            return parentList;
        }
        // Parent helper function - checks whether object is empty
        function _isEmpty(obj) {
            return Object.keys(obj).length === 0 && obj.constructor === Object;
        }

         /*      4.  THE GRANDPARENT SELECTOR
         *      Returns grandparent of selector
         *      If nested selector is provided within this method,
         *      it returns grandparent only if it matches that selector
         *      Otherwise an empty object */
        this.grandParent = (selector) => {

            let parent = this.parent();
            return parent.parent(selector);
        };

        /*      4.  THE ANCESTOR SELECTOR
         *      Returns ancestors of selector
         *      If nested selector is provided within this method,
         *      it returns ancestor only if it matches that selector
         *      Otherwise an empty object */
        this.ancestor = (selector) => {
            console.log("THIS.grandparent");
            console.log(this.grandParent());
            let ancestorList = [ ];
            let ancestors = this.grandParent();
            let currAncestor;

            console.log("//GRANDPARENTS//")
            console.log(ancestors);
            while (currAncestor === undefined || !currAncestor.matches("html")) {

                ancestors = ancestors.parent();
                console.log("//ANCESTORS//")
                console.log(ancestors);

                for (let i = 0; i < ancestors.elements.length; i++) {

                    currAncestor = ancestors.elements[i];
                    if (selector === undefined || currAncestor.matches(selector)) { 
                        ancestorList.push(currAncestor);
                    }
                }
                if (currAncestor === undefined || currAncestor.matches("html")){break;}
            }
            return ancestorList;
        };

        this.onClick = (clickEvent) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.addEventListener('click', clickEvent);
            }
        };

        this.insertText = (text) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.innerHTML = text;
            }
        };

        this.append = (text) => {

            console.log("text");
            console.log(text);
            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                let previousText = elem.innerHTML;
                if (!text.nodeName) {
                    elem.innerHTML = previousText + text;
                } else { 
                    elem.appendChild(text);
                }
                
            }
        };

        this.prepend = (text) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                let previousText = elem.innerHTML;
                if (!text.nodeName) {
                    elem.innerHTML = text + previousText;
                } else { 
                    elem.insertBefore(text, elem.childNodes[0]);
                }
                
            }
        };

        this.delete = () => {
            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.parentNode.removeChild(elem);
            }
        };

        this.ajax = (configs) => { }

        this.css = (cssElem, value ) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.setAttribute("style", cssElem + ": " + value);
            }
            
        };

        this.toggleClass = (className) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.classList.toggle(className);
            }
            
        };

        this.onSubmit = (functionality) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.onsubmit = functionality;
            }
        };

        this.onInput = (functionality) => {

            for (let i = 0; i < this.elements.length; i++) {

                let elem = this.elements[i];
                elem.oninput = functionality;
            }
        };

    }

})();

