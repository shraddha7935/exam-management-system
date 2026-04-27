function generate() {
    let name = document.getElementById("search").value;

    fetch("http://localhost:5000/results")
    .then(res => res.json())
    .then(data => {

        // ✅ multiple subjects fix
        let students = data.filter(r => r.studentName === name);

        if (students.length === 0) {
            document.getElementById("report").innerHTML =
            `<p class="text-red-500">No Data Found</p>`;
            return;
        }

        let total = 0;

        let html = `<div class="bg-gray-100 p-3 rounded shadow">`;
        html += `<p><b>Name:</b> ${name}</p><hr>`;

        students.forEach(s => {
            total += Number(s.marks);

            html += `
            <p><b>Subject:</b> ${s.subject}</p>
            <p><b>Marks:</b> ${s.marks}</p>
            <p><b>Result:</b> ${s.status}</p>
            <p><b>Grade:</b> ${s.grade}</p>
            <hr>
            `;
        });

        // ✅ percentage add (bonus 🔥)
        let percentage = (total / students.length).toFixed(2);

        html += `<p><b>Total:</b> ${total}</p>`;
        html += `<p><b>Percentage:</b> ${percentage}%</p>`;

        html += `</div>`;

        document.getElementById("report").innerHTML = html;
    });
}