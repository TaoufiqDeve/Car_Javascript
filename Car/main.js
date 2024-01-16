class voituer{
    constructor(Immatriculation,Marque,Couleur,Carburant,Prix_Jour){
        this.Immatriculation = Immatriculation
        this.Marque = Marque
        this.Couleur = Couleur
        this.Carburant = Carburant
        this.Prix_Jour = Prix_Jour

    }
}


V1 = new voituer("48-A-20000","Clio 3","Noir","Diesel","250")
V2 = new voituer("48-A-20001","Clio 4","Rouge","Diesel","300")
V3 = new voituer("48-A-20002","Dacia","Noir","Essence","200")
tablue = [V1,V2,V3]


t = document.getElementById('t')

function ajoutervoituer(){
    for(i of tablue){
        tr = document.createElement('tr')
        for(j in i){
            var th = document.createElement('th')
            th.textContent = i[j]
            tr.append(th)
            
        }
        var S = document.createElement('button')
        S.onclick = Supprem
        S.setAttribute('class','sup')
        S.innerHTML= "Supprem"
        tr.append(S)
        t.append(tr)
    }
}

ajoutervoituer()



function Supprem(){
    this.parentElement.remove(this.parentElement)
    a = this.parentElement
    trs = document.getElementsByTagName(tr)
    for(let i of trs){
        if (i == a){
            var index = k
        }
        k++
    }
    tablue.splice(index,1)
}
console.log(tablue)

var serchee = document.getElementById("serche")
var input = document.getElementById('input')

serchee.onclick = function(){
    serche(input.value)
}

function serche(Marque){
    for(let i=0 ; i< tablue.lenght;i++){
        if(Marque == tablue[i]['Marque']){
            var indec = i
        }
        
    }
    for(let i=0 ;i<= tablue.lenght;i++){
        trs[i].classList.add('d-none')
    }
    trs[indec].classList.remove('d-none')
    
}


