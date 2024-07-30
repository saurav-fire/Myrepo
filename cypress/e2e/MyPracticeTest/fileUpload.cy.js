

describe('fileUpload',()=>
{

    it('file upload having type = file', ()=>
    {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile('text1');
        cy.get('#file-submit').click();

    })
    it('file upload and rename file', ()=>
        {
    
            cy.visit("https://the-internet.herokuapp.com/upload");
            cy.get("#file-upload").attachFile({filePath:'text1', fileName:'newfile'});
            cy.get('#file-submit').click();
    
        })

        it('file upload drag and drop', ()=>
            {
        
                cy.visit("https://the-internet.herokuapp.com/upload");
                cy.get("#drag-drop-upload").attachFile("text1",{subjectType:'drag-n-drop'});
                cy.get('#file-submit').click();
        
            })
            it.only('file upload drag and drop', ()=>
                {
            
                    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
                    cy.get('#filesToUpload').attachFile(['text1','text2']);
                    //cy.get('#file-submit').click();
            
                })

            

})