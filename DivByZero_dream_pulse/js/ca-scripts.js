var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;

    // changed header
    let header = document.getElementById('tm-header');
    header.textContent = customerName;

    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName;
};

// Change all class names 'tm-white-rect' to 'tm-blue=rect'
function toggleColors() {


    let el2 = document.querySelectorAll('.tm-color-primary')



    for (i = 0; i < el2.length; ++i) {
        el2[i].classList.add('tm-color-green');
        el2[i].classList.remove('tm-color-primary');
    }
};

//<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
function hideElement() {


};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text-->

    

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text-->

    

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: change about text-->

     

    //<p id="aboutpara2"> <!--todo: change about text-->


    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company address/phone number text-->


}; 



