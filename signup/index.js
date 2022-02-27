let doc = document

function createAccount(){
    const url = 'https://deploycloudweekapi.herokuapp.com/signup'

    let username = doc.getElementById('username').value
    let email = doc.getElementById('email').value
    let pass = doc.getElementById('pass').value

    let data = { username, email, pass }

    let config = {
        method:'POST',
        body: JSON.stringify(data),
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    }

    fetch(url,config)
            .then(response => {
               if(response.ok){
                   alert('data send with success')
               }else{
                  alert(response.status + ':' + response.statusText)
               }
            })
            .catch((error)=>{
                alert(error)
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


