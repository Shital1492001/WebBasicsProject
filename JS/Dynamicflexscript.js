// Define the Doctor class
class Doctor {
    constructor(name, specialty, mobileNo) {
        this.name = name;
        this.specialty = specialty;
        this.mobileNo = mobileNo;
    }

    createCard() {
        const div = document.createElement('div');
        div.className = 'entity-card';

        div.innerHTML = 
            '<h3>' + this.name + '</h3>' + 
            '<p>Specialty: ' + this.specialty + '</p>' + 
            '<p>Mobile No: ' + this.mobileNo + '</p>';

        return div;
    }
}
const doctors = [
    new Doctor('Dr. Smith', 'Cardiologist', '8878545455'),
    new Doctor('Dr. Jones', 'Dermatologist', '8992632266'),
    new Doctor('Dr. Taylor', 'Pediatrician', '9852145574'),
];

const doctorContainer = document.getElementById('doctor-container');
if (doctorContainer) {
    doctors.forEach(function(doctor) {
        doctorContainer.appendChild(doctor.createCard());
    });

    
}