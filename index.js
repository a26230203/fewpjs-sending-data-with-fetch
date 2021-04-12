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
        return response.json();
    })
    .then(date => {
        console.log(date)
    })
    .catch((error) => {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    })
}

