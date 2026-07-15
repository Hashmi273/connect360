let companyData = {};

async function loadCompanyData() {
    try {
        const response = await fetch("company.json");
        companyData = await response.json();

        document.querySelectorAll(".company-name").forEach(el=>{
            el.innerText = companyData.company;
        });

        document.querySelectorAll(".company-email").forEach(el=>{
            el.innerText = companyData.email;
        });

        document.querySelectorAll(".company-phone").forEach(el=>{
            el.innerText = companyData.phone;
        });

        document.querySelectorAll(".company-address").forEach(el=>{
            el.innerText = companyData.address;
        });

        document.querySelectorAll(".company-domain").forEach(el=>{
            el.innerText = companyData.domain;
        });

        document.querySelectorAll(".copyright").forEach(el=>{
            el.innerText = companyData.copyright;
        });

    } catch (e) {
        console.log("Company data not loaded", e);
    }
}

loadCompanyData();