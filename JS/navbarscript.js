// Create the navigation bar
const navbar = document.getElementById('navbar');
const navLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'Appointments', href: 'appointments.html' },
    { name: 'Doctors', href: 'doctors.html' },
    { name: 'Reports', href: 'reports.html' },
    { name: 'CancelAppointment', href: 'Cancelappointments.html'}
];
navbar.innerHTML = navLinks.map(function(link) {
    return '<a href="' + link.href + '">' + link.name + '</a>';
}).join('');