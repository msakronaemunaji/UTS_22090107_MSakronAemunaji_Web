document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for destination list
    const destinations = [
        { name: 'Pananjakan 1 Gunung Bromo', description: 'Pananjakan' },
        { name: 'Wisata Gunung Widodaren Bromo', description: 'Gunung Widodaren' },
        { name: 'Objek Wisata Bukit Cinta', description: 'Bukit Cinta' }
    ];

    // Display destination list in a table
    const destinationTable = document.getElementById('destination-table');
    const tbody = destinationTable.querySelector('tbody');

    destinations.forEach(destination => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${destination.name}</td><td>${destination.description}</td>`;
        tbody.appendChild(row);
    });
});
