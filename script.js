list=[];
list2=[];
list3=[];
list4=[];
var storeData;
let xhr = new XMLHttpRequest();
xhr.open("GET","/stores.json");
xhr.send();
//let sep = document.getElementById('sg').name;
/*
function nowcheck(){
    var cont = document.getElementById('f1').children;
    for(i=0;i<cont.length;i++){
        if(cont[i].checked){
            console.log(cont[i].name);
        }
    }
} */

xhr.onload = () =>{
    console.log(xhr);
    if(xhr.status == 200 && xhr.readyState ==4){
        storeData = JSON.parse(xhr.responseText).Stores;
        //console.log(xhr.responseText);
        //console.log(storeData);
        if(storeData) {
            for(const {title,discount,Brand,size,type,popularity,price,pic} of storeData) {
                    //var div = batData.adocument.createElement('div');
                    const batData = content.appendChild(document.createElement('div'));
                    batData.className='Bat-data';
                    batData.innerHTML=(`<img src="${pic}"> <p>${title}</p> <h3>₹${price}</h3> <p>rating : ${popularity}</p> <span class="five">${discount}<span/>`);
                    list.push(batData);
            }
            //console.log(list);
            ValidateBrandSelection = () =>{
                if (list!=null){
                    for (let p of list){
                        p.remove();
                    }
                }
                if(list2!==null){          
                    for(let point of list2){    //this makes sure that when we change the category the other markers get removed
                      point.remove();
                    }
                }
                    if(storeData) {
                        for(const {title,discount,Brand,size,popularity,type,price,pic} of storeData) {
                                //var div = batData.adocument.createElement('div');
                                var batBrand = document.getElementById('f1').children;
                                console.log(batBrand);
                                for(i=0;i<batBrand.length;i++){
                                    if(batBrand[i].checked && batBrand[i].name == Brand){   
      
                                            const batData = content.appendChild(document.createElement('div'));
                                              batData.className='Bat-data';
                    
                                            batData.innerHTML=(`<img src="${pic}"> <p>${title}</p> <h3>₹${price}</h3> <p>rating : ${popularity}</p> <span>${discount}<span/>`);
                                            //batData.appendChild(div);
                                            list2.push(batData);
                                        
                                }
                                
                            }
                        } 
                    }
            }
            ValidateTypeSelection = () =>{
                if (list!=null){
                    for (let p of list){
                        p.remove();
                    }
                } 
                if(list2!==null){          
                    for(let point of list2){    
                      point.remove();
                    } 
                }
                if(list3!==null){          
                    for(let point of list3){    //this makes sure that when we change the category the other markers get removed
                      point.remove();
                    }
                } 
                    if(storeData) {
                        for(const {title,discount,Brand,size,type,popularity,price,pic} of storeData) {
                                //var div = batData.adocument.createElement('div');
                                var batType = document.getElementById('f2').children;
                                for(i=0;i<batType.length;i++){
                                    if(batType[i].checked && batType[i].name == type){         
                                            const batData = content.appendChild(document.createElement('div'));
                                              batData.className='Bat-data';
                    
                                            batData.innerHTML=(`<img src="${pic}"> <p>${title}</p> <h3>₹${price}</h3> <p>rating : ${popularity}</p> <span>${discount}<span/>`);
                                            //batData.appendChild(div);
                                            list3.push(batData);
                                        
                                }
                                
                            }
                        } 
                    }
            }
            ValidateSizeSelection = () =>{
                if (list!=null){
                    for (let p of list){
                        p.remove();
                    }
                } 
                if(list2!==null){          
                    for(let point of list2){    
                      point.remove();
                    } 
                }
                if(list3!==null){          
                    for(let point of list3){   
                      point.remove();
                    }
                } 
                if(list4!==null){          
                    for(let point of list4){    //this makes sure that when we change the category the other markers get removed
                      point.remove();
                    }
                } 
                    if(storeData) {
                        for(const {title,discount,Brand,size,popularity,type,price,pic} of storeData) {
                                //var div = batData.adocument.createElement('div');
                                var batSize = document.getElementById('f3').children;
                                for(i=0;i<batSize.length;i++){
                                    if(batSize[i].checked && batSize[i].name == size){         
                                            const batData = content.appendChild(document.createElement('div'));
                                              batData.className='Bat-data';
                    
                                            batData.innerHTML=(`<img src="${pic}"> <p>${title}</p> <h3>₹${price}</h3> <p>rating : ${popularity}</p> <p>${discount}<p/> <p>size : ${size}</p>`);
                                            //batData.appendChi(`<img src="${pic}"> <p>${title}</p> <h3>${price}</h3> <span>${discount}<span/>`)
                                            list4.push(batData);
                                        
                                }
                                
                            }
                        } 
                    }
            }
                
        }

        displayByPopularity = () => {
            $("#content").html("");
            data = storeData; 
            data.sort((a, b) => {
                return b.popularity - a.popularity;
            });
            displayData(data);           
        }

        displayByLowToHigh = () => {
            $("#content").html("");
            data = storeData;
            data.sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price);
            });
            displayData(data);
        }
    
        displayByHighToLow = () => {
            $("#content").html("");
            data = storeData;
            data.sort((a, b) => {
                return  parseInt(b.price) - parseInt(a.price);
            });
            // data.reverse();
            displayData(data); 
        }

        function displayData(data) {
            for(const {title,discount,Brand,size,type,popularity,price,pic} of storeData) {
                //var div = batData.adocument.createElement('div');
                const batData = content.appendChild(document.createElement('div'));
                batData.className='Bat-data';
                batData.innerHTML=(`<img src="${pic}"> <p>${title}</p> <h3>₹${price}</h3> <p>rating : ${popularity}</p> <span class="five">${discount}<span/>`);
        }
        } 
    


    }   
}    