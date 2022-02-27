
function storage(pass){
    localStorage.setItem('_KEYPASS',pass.substring(0,5))    
}

function dataSend() {
    /*production url*/
    const url = 'https://deploycloudweekapi.herokuapp.com/login'

    /*development url*/
    // const url = 'http://192.168.100.20:8081/login' || 'http://localhost:8081/login'
    
    /*production url*/
    const urlAppProd = 'https://cloudweek.netlify.app/index.html'

    /*development url*/
    const urlAppDev  = 'http://127.0.0.1:5500/app/index.html'

    let email = document.getElementById('email').value
    let pass  = document.getElementById('pass').value

        const data = { email, pass }

        let config = {
            method:'POST',
            body: JSON.stringify(data),
            mode:'cors',
            headers:{
                'Access-Control-Allow-Origin':'https://cloudweek.netlify.app/',
                'Content-Type':'application/json'
            }
        }
    
        fetch(url,config)
                .then(response => {
                    if(response.ok){
                           storage(data.pass)
                           document.location.href = urlAppProd
                    }else{
                        alert(response.status + ':' + response.statusText)
                    }
                })
                .catch((error)=>{
                    alert(error)
                })
    
}


