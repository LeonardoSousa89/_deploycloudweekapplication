let doc = document

function createAccount(){
    const url = 'https://cloudweek.herokuapp.com/signup'

    let username = doc.getElementById('username').value
    let email = doc.getElementById('email').value
    let pass = doc.getElementById('pass').value

    let data = { username, email, pass }
    
    let config = {
        method:'POST',
        body: JSON.stringify(data),
        headers :{
            'Content-Type':'application/json'
        }   
    }

    //está enviando os dados, porém gera uma mensagem de erro em conjunto
    fetch(url,config)
            .then(response => {
                response.json()
            })
            .catch((error)=>{
                // alert(error)
                console.log(error)
            })

    clear()
}

function clear() {
    let username = doc.getElementById('username')
    let email = doc.getElementById('email')
    let pass = doc.getElementById('pass')

    username.value = ''
    email.value = ''
    pass.value = ''
}


