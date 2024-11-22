function CreaCarosello(Immagine){
    const movie=document.createElement("div");
    movie.className= "Film";
    movie.innerHTML= `<img src="${Immagine}" class= "img-fluid" alt="Netflix">`
    return movie

}




function RiempiCarosello(lineName,begin,finish,){
    const row=document.getElementById(lineName);
    for(let i=begin;i<=finish;i++){
        const foto= `assets/imgs/movies/${i}.png`
        const card=CreaCarosello(foto);
        row.appendChild(card)
    }

}




function ScorrimentoImg(id){
    const container =document.getElementById(id);
    const riga = container.closest(".block-riga");
    const bottoneGo= riga.querySelector(".bottone-go");
    const bottoneBack= riga.querySelector(".bottone-back");
    Transition=0;

    bottoneBack.addEventListener(`click`,()=>{   
        Transition -=1000;
        Transition = Math.max(Transition, -container.scrollWidth + riga.offsetWidth);
        container.style.transform = `translateX(${Transition}px)`;
    }) 


bottoneGo.addEventListener(`click`,()=> {
    Transition +=1000;
    Transition = Math.min(Transition,0);
    container.style.transform = `translateX(${Transition}px)`;
    
})


}

addEventListener("DOMContentLoaded",()=>{
RiempiCarosello("Pellicola",1,6);
RiempiCarosello("SerieTv",7,12);
RiempiCarosello("Deeper",13,18);
ScorrimentoImg("Pellicola");
ScorrimentoImg("SerieTv");
ScorrimentoImg("Deeper");


});

