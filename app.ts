class Population1 {
    name: string;
    gender: string;
    address: string;
    education: string;
    profession: string;
  
    constructor(name: string, gender: string, address: string, education: string, profession: string) {
      this.name = name;
      this.gender = gender;
      this.address = address;
      this.education = education;
      this.profession = profession;
    }
  }
  
  let records1: Population[] = [];
  
  // Handle form submission
  document.getElementById("populationForm")?.addEventListener("submit", function (e: Event) {
    e.preventDefault();
  
    // Get form values
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let gender = (document.querySelector("input[name='gender']:checked") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let education = (document.getElementById("education") as HTMLSelectElement).value;
    let profession = (document.getElementById("profession") as HTMLSelectElement).value;
  
    // Create a new record
    let newRecord = new Population(name, gender, address, education, profession);
    records.push(newRecord);
  
    // Save to localStorage
    localStorage.setItem("populationRecords", JSON.stringify(records));
    console.log("Record added:", newRecord);
  });
  
  // Retrieve saved records
  let savedRecords1: Population[] = JSON.parse(localStorage.getItem("populationRecords") || "[]");
  console.log("Saved Records:", savedRecords);
  