// --------------
// TP ALGORITHMIE
// --------------

// CONSEIL 1:
// RELIRE VOS EXERCICES
// ILS FONT OFFICE DE DOCUMENTATION

// CONSEIL 2:
// BIEN LIRE LES ENONCES

// --------------
// Exercice 01
// --------------

// Créer une fonction, qui prendra en paramètre deux nombres
// Et qui affichera dans le terminal la multiplication de ces 2 nombres
// Exemple: mult(5, 3) => nous affichera 15

const exo1 = (multi1,multi2) => {
    let result = multi1 * multi2 
    console.log(result)
} 

exo1(5,7)

// --------------
// Exercice 02
// --------------

// Déclarer un array, avec plusieurs nombres
// ex: [1, 8, 588, 64, 25]
// Afficher dans le terminal, chaque nombre multiplié par 4

const array = [1, 8, 588, 64, 25]
for (let i = 0 ; i < array.length ; i++) {
   console.log(array[i] * 4)
}


// --------------
// Exercice 03
// --------------

// Créer un objet avec pour clés votre prénom et votre age 
// (vous avez le droit de tricher pour votre age).
// Exemple:
// const user = {
//   firstName: 'Julien',
//   age: 24
// }
// Si la valeur de la clé age est supérieur à 28, 
// afficher dans le terminal ("Je suis dans la fleur de l'âge")
// Sinon, afficher ("Je suis en train de me bonifier")

const identité = {
    prénom: 'Sélim',
    age: 20
}

if (identité.age > 28) {
    console.log("Je suis dans la fleur de l'âge")
}
else console.log("Je suis en train de me bonifier")

// --------------
// Exercice 04
// --------------

const users = [
  {
    firstname: 'john',
    age: 34
  },
  {
    firstname: 'clara',
    age: 26
  },
  {
    firstname: 'sarah',
    age: 29
  }
]

// A l'aide de cet array
// Afficher dans le terminal la somme de leur age.

let sommeAge = 0
for ( let i = 0 ; i < users.length ; i++) {
    sommeAge += users[i].age
}

console.log(sommeAge)

// --------------
// Exercice 05
// --------------

const users = [
  {
    firstname : 'laurent'
  },
  {
    firstname : 'david'
  },
  {
    firstname : 'caroline'
  }
]

// Créer une fonction, qui prend en paramètre un prénom
// et qui va ajouter un nouvel objet, avec son prénom, dans cet array
// Afficher ensuite l'array dans le terminal.
// Attention, si le prénom est déjà présent, afficher à la place:
// "Prénom déjà présent, merci d'en choisir un autre"


const addUsers = prenom => {
    for (let i = 0 ; i < users.length ; i++) {
        if (users.firstname == prenom) {
            console.log("Désolé le prénom est déjà pris")
        }
    }
    let newUser = {
        firstname: prenom
    } 
    users.push(newUser)
}

addUsers("Matthieu")
console.log(users)

// --------------
// Exercice06
// --------------

// Créer une fonction qui va calculer le nombre de 'a' dans une String
// (afficher le résultat dans le terminal. Exemple: "Il y a ... de lettres 'a' dans la phrase")
// Puis remplacer tous les 'a' d'une String par des 'z'
// ex: "Sayonara! Oui, j'ai des origines japonaises."
// résultat attendu: "Szyonzrz! Oui, j'zi des origines jzponzises."

const nbLettre = phrase => {
    let resultat = 0
    phrase = "Sayonara! Oui, j'ai des origines japonaises."
    for (let i = 0 ; i < phrase.length ; i++) {
        if(phrase[i] === "a") {
            resultat += 1
        }
    }
    console.log(`Il y a ${resultat} lettres 'a' dans la phrase`)
}

nbLettre()

const replace = str => {
    let res =""
    for (let i = 0 ; i < str.length ; i++) {
    if (str[i] === "a") {
        res += "z"
        }
    else {
        res += str[i]
        }
    }
    console.log(res)
}

replace("Sayonara! Oui, j'ai des origines japonaises.")

// --------------
// Exercice 07
// --------------

// Créer un array avec plusieurs chiffres/nombres de votre choix
// Créer une fonction qui, TOTALEMENT AU HASARD
// nous MULTIPLIERA ou DIVISERA ces nombres les uns à la suite des autres
// exemple1: [1, 4, 32, 8] => 1 * 4 / 32 * 8 = 1024
// exemple2: [1, 4, 32, 8] => 1 / 4 * 32 * 8 = 64



const hasard = arrExo => {
    let result = 1
    for (let i = 0; i < arrExo.length ; i++) {
        const random = Math.round(Math.random()) 
        if (!random) {
            result /= arrExo[i]
        } 
        else {
            result *= arrExo[i]
        }
    }
    console.log(result)
}
hasard([3,4,6,8,9,7])

// --------------
// Exercice 08
// --------------

// Un utilisateur vient de s'inscrire sur votre site.
// Malheureusement, il inscrit son prénom de façon 'hasardeuse'
// ex: oLivieR
// Créer une fonction, qui prendra en paramètre un prénom
// Cette fonction mettra la première lettre en majuscule
// Puis le reste du prénom en minuscule.
// résultat attendu: Olivier

const inscrit = prenom => {
    let resteprenom = ""
    for (let i = 1 ; i < prenom.length ; i++) {
        resteprenom += prenom[i]
    }
    console.log(prenom[0].toUpperCase() + resteprenom.toLowerCase())
}

inscrit("vALEnTINE")

// --------------
// Exercice 09
// --------------

// Créer une fonction qui fait office de calculatrice
// Cette fonction peut additionner, multiplier, soustraire, ou diviser 2 nombres
// Elle accepte 3 paramètres:
// Les 2 premiers paramètres seront vos chiffres/nombres
// Le 3ème paramètre sera le signe représentant le calcul.
// ex: (5, 10, '*') => résultat: 50
// ex: (8, 4, '+') => résultat: 12
// ex: (77, 33, '-') => résultat: 44
// BONUS: si un calcul n'est pas réalisable, indiquez: 'Calcul impossible'
// ex: (8, 'k', '-') => résultat: 'Calcul impossible'
// ex: (13, '45', 'plus') => résultat: 'Calcul impossible'
// Aide: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN

const calculatrice = (x,y,op) => {

    if (op === '+')  return x + y

    else if (op === '-') return x - y

    else if (op === '*')  return x * y

    else if (op === '/')  return x / y
}
const res = calculatrice(25,5,'+')
console.log(res)

// --------------
// Exercice 10
// --------------

// Créer une fonction nommée generateStep
// Cette fonction prend 3 paramètres: (min, max, step)
// Grâce à ces arguments, créez un array composé de nombres
// Le premier sera 'min' (le nombre le plus petit)
// Le dernier sera 'max' (le nombre le plus grand)
// Afficher entre ces 2 nombres les étapes (step)
// ex: generateStep(2, 10, 2) // doit retourner [2, 4, 6, 8, 10]
// ex: generateStep(1, 13, 3) // doit retourner [1, 4, 7, 10, 13]
// ATTENTION: le paramètre max n'est pas affiché, si le nombre suivant le dépasse
// ex: generateStep(1, 12, 3) // doit retourner [1, 4, 7, 10]

const generateStep = (min,max,step) => {
    let array = []
    for (let i = 0 ; min < max ; i++) {
        array[i] + step
        console.log(array[i] + step)
    }
}

generateStep(2,10,2)

// --------------
// Exercice 11
// --------------

// Fibonacci
// La suite de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Vous commencez l'exercice avec cet array: [0, 1]
// Créez une fonction qui va créer la suite de Fibonacci à l'intérieur de cet array
// avec en paramètre un nombre 'x', qui définira le nombre d'élément à afficher
// ex: fibo(5) => 0, 1, 1, 2, 3, 5, 8
// ex: fibo(8) => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// afficher le résultat dans le terminal

const fiboArray = x => {
    let arr = [0, 1]
    for (let i = 0; i < x; i++) {
        arr.push((arr[i] + arr[i + 1]))
    }
    console.log(arr)
}

fiboArray(8)