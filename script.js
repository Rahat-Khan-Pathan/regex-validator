let select = null;
const choose = (id) => {
    if (id == 0) {
        select = "email";
        document.getElementById("drop").innerText = "Email Validator";
        document
            .getElementById("input")
            .setAttribute("placeholder", "Enter Email");
        document.getElementById("submit-btn").removeAttribute("disabled");
        document.getElementById("input").removeAttribute("disabled");
        document.getElementById("input").value = "";
    } else if (id == 1) {
        select = "phone";
        document.getElementById("drop").innerText = "Phone Number Validator";
        document
            .getElementById("input")
            .setAttribute("placeholder", "Enter Phone Number");
        document.getElementById("submit-btn").removeAttribute("disabled");
        document.getElementById("input").removeAttribute("disabled");
        document.getElementById("input").value = "";
    } else {
        select = "post";
        document.getElementById("drop").innerText = "Post Code Validator";
        document
            .getElementById("input")
            .setAttribute("placeholder", "Enter Post Code");
        document.getElementById("submit-btn").removeAttribute("disabled");
        document.getElementById("input").removeAttribute("disabled");
        document.getElementById("input").value = "";
    }
};

// Alert
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
    ].join("");
    // alertPlaceholder.innerHTML = "";

    if (alertPlaceholder.childElementCount >= 3) {
        alertPlaceholder.firstElementChild.remove();
    }
    alertPlaceholder.append(wrapper);
};

const check = () => {
    const text = document.getElementById("input").value;
    if (select == "email") {
        const re = /^([a-zA-Z0-9]+\.?)+@[a-zA-Z0-9]+\.{1}\w+$/;
        const st = "rahat.khan.pathan@gmail.com";
        console.log(re.test(st));
        if (re.test(text)) {
            appendAlert("This email is valid", "success");
        } else {
            appendAlert("This email is not valid", "danger");
        }
    } else if (select == "phone") {
        const re = /^(?:0|(\+)?880)\d{10}$/;
        if (re.test(text)) {
            appendAlert("This phone number is valid", "success");
        } else {
            appendAlert("This phone number is not valid", "danger");
        }
    } else {
        const re = /^\d{4}$/;
        if (re.test(text)) {
            appendAlert("This post code is valid", "success");
        } else {
            appendAlert("This post code is not valid", "danger");
        }
    }
};
