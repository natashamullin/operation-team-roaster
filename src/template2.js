const fs = require("fs");

const generateCard = (team) => {
    console.log("you made it here")
    return `
        ${team
            .filter((member) => member.getRole() === "Manager")
            .map(({ name, id, email, officeNumber }) => {
                return `
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-anchor"></i> Manager</h6>
                </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office number: ${officeNumber}</li>
            </ul>
            </div>
            </div>
            `;
            })
            .join('')}
        ${team
            .filter((member) => member.getRole() === "Engineer")
            .map(({ name, id, email, github }) => {
                return `
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-calculator"></i> Engineer</h6>
                </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
            </ul>
            </div>
            </div>
            `;
            })
            .join('')}
        ${team
            .filter((member) => member.getRole() === "Intern")
            .map(({ name, id, email, school }) => {
                return `
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-book-reader"></i> Intern</h6>
                </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee Id: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
            </div>
            `;
            })
            .join('')}
    `
};
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if err reject
            if (err) {
                console.log("something went wrong!");
                return;
            }
            // if all is well, resolve
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    })
};
const generatePage = (team) => {

    console.log(`Passed array from index.js`);
    return `<!DOCTYPE html>
    <html lang="en">
  
      <head>
        <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
            <title>Team Member Sheet</title>
  
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
              <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,300;1,600&family=Noto+Sans+JP&display=swap">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                  <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  
                  <body>
  
                    <header class="header">Employee Roster</header>
  
  
                    <section>
                      <div class="row" id="card">
                      ${generateCard(team)}
                    </div>
                    </section>

                    <footer class="footer">
                      <p style="text-align: center"> Copyright &copy; 2020-
              <script>document.write(new Date().getFullYear())</script> With Love by Me!!</p>
  
                    </footer>
  
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
                      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    <script src="../lib/classes.js"></script>
  
                  </body>
  
  </html>`
};

// const copyFile = () => {
//     return new Promise((resolve, reject) => {
//         fs.copyFile('./src/styles.css', './dist/styles.css', err => {
//             // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
//             if (err) {
//                 reject(err);
//                 // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
//                 return;
//             }
//             // if everything went well, resolve the Promise and send the successful data to the `.then()` method
//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };
module.exports = {
    generatePage,
    writeFile,
    // copyFile
};