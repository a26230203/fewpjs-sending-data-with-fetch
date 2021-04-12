// Add your code here
function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name : `${name}`,
            email : `${email}`
        })
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(response => {
         response.json();
    })
    .then(obj => {
        console.log(obj)
    })
    .catch((error) => {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    })
}

