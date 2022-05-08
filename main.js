'use strict';

{

    function createColum(col){
        
            const source = [];
        
            for(let i = 0;i < 15; i++){
                // source[i]=i+1;

                source[i] = i+1 + 15*col;
            }
        
            const colum = [];
        
            for(let i = 0;i<5;i++){
                colum[i]= source.splice(Math.floor(Math.random() * source.length),1)[0];
            }

            return colum;
            
    }

    function createColums(){
        const colums = [];
        // colums[0] = createColum(0)
        // colums[1] = createColum(1)
        // colums[2] = createColum(2)
        // colums[3] = createColum(3)
        // colums[4] = createColum(4)
    
        // colums[2][2] = 'FREE';

        for (let i = 0; i < 5; i++) {
            colums[i] = createColum(i);
            
        }
        colums[2][2] = 'FREE'
        return colums;

    }
    

    // console.table(colums);

   

    function renderBingo(colums){
        
        for(let row =0; row <5;row++){
            const tr = document.createElement('tr');
            for(let col=0;col<5;col++){
                const td = document.createElement('td');
                td.textContent = colums[row][col];
                tr.appendChild(td);
            }
    
            document.querySelector('tbody').appendChild(tr);
        }

    }


    const colums = createColums();
    
    renderBingo(colums);
}

