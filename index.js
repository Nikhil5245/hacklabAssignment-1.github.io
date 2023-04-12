
function waitfrome(ms){
    return new Promise(resolve => {
        setTimeout(() => {resolve('')},ms);
    })
}
async function myFunction() {
        
    for(let i=1;i<=1000;i++){
        if(document.getElementById("Red").clicked == true)
        {
            document.getElementById("Green").style.backgroundColor = "Green";
            await waitfrome(15000);
            if(document.getElementById('Green').clicked == true){
                document.getElementById("Yellow").style.backgroundColor = "Yellow";
                await waitfrome(5000);
                break;
            }
            document.getElementById("Yellow").style.backgroundColor = "Yellow";
            await waitfrome(5000);
            break;
        }
        document.getElementById("Red").style.backgroundColor = "Red";
        await waitfrome(20000);
        if(document.getElementById('Green').clicked == true){
            document.getElementById("Yellow").style.backgroundColor = "Yellow";
            await waitfrome(5000);
        }
        document.getElementById("Green").style.backgroundColor = "Green";
        await waitfrome(15000);
        if(document.getElementById('Yellow').clicked == true){
            document.getElementById("Red").style.backgroundColor = "Red";
        }
        document.getElementById("Yellow").style.backgroundColor = "Yellow";
        await waitfrome(5000);
        if(document.getElementById("Red").clicked == true)
        {
            document.getElementById("Green").style.backgroundColor = "Green";
            await waitfrome(15000);
            if(document.getElementById('Green').clicked == true){
                document.getElementById("Yellow").style.backgroundColor = "Yellow";
                await waitfrome(5000);
                break;
            }
            document.getElementById("Yellow").style.backgroundColor = "Yellow";
            await waitfrome(5000);
            break;
        }
        if(document.getElementById('Green').clicked == true){
            document.getElementById("Yellow").style.backgroundColor = "Yellow";
            await waitfrome(5000);
        }
        document.getElementById("Red").style.backgroundColor = "White";
        document.getElementById("Green").style.backgroundColor = "White";
        document.getElementById("Yellow").style.backgroundColor = "White";
        await waitfrome(1000);
    }
  }