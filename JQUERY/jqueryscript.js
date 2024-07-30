
$(document).ready(function() {
    // Create the navigation bar
    const navLinks = [
        { name: 'Home', href: 'index.html' },
        { name: 'Appointments', href: 'appointments.html' },
        { name: 'Doctors', href: 'doctors.html' },
        { name: 'Reports', href: 'reports.html' },
        { name: 'CancelAppointment', href: 'Cancelappointments.html'}
    ];
    $('#navbar').html(navLinks.map(function(link) {
        return '<a href="' + link.href + '">' + link.name + '</a>';
    }).join(''));

    // Create dynamic doctors list
    const doctors = [
        { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', mobileNo: '8878545455' },
        { id: 2, name: 'Dr. Jones', specialty: 'Dermatologist', mobileNo: '8992632266' },
        { id: 3, name: 'Dr. Taylor', specialty: 'Pediatrician', mobileNo: '9852145574' }
    ];

    if ($('#doctor-container').length) {
        doctors.forEach(function(doctor) {
            const div = $('<div>').addClass('entity-card').html(
                '<h3>' + doctor.name + '</h3>' + 
                '<p>Specialty: ' + doctor.specialty + '</p>' +
                '<p>MobileNo: ' + doctor.mobileNo + '</p>'
            );
            $('#doctor-container').append(div);
        });
    }

});