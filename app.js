"use strict";
class Population {
    constructor(name, gender, address, education, profession) {
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.education = education;
        this.profession = profession;
    }
}
let records = [];
document.getElementById("populationForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;
    let newRecord = new Population(name, gender, address, education, profession);
    records.push(newRecord);
    localStorage.setItem("populationRecords", JSON.stringify(records));
    console.log("Record added:", newRecord);
});
let savedRecords = JSON.parse(localStorage.getItem("populationRecords") || "[]");
console.log("Saved Records:", savedRecords);
