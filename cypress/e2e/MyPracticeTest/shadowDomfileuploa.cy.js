
describe("shadow dom file upload",()=>{

it('shadow dom upload file',()=>{

cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('text1');


})


})