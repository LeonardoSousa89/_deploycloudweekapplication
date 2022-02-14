function storage(){
    let Key = localStorage.getItem('_KEYPASS')

    if(!Key){
         /*production url*/
        document.location.href = 'https://cloudweek.netlify.app/index.html'

        /*development url*/
        // document.location.href = '../index.html'
    }
}
storage()

function removeItem(){
    localStorage.removeItem('_KEYPASS')
    /*production url*/
    document.location.href = 'https://cloudweek.netlify.app/app/index.html'

    /*development url*/
    // document.location.href = '../index.html'
}
