// template helper code
const Template = `<div class="card ">
                            <div class="cardheader">
                              <span class=" grey-text text-darken-4">${this.title}<i class="material-icons right">close</i></span>
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">${this.name}<i class="material-icons right">more_vert</i></span>
                              <p>${this.office}</p>
                              <p>${this.id}</p>
                              <p>${this.school}</p>
                            </div>
                            <div class="card-reveal">
                            <p><a href="#">${this.email}</a></p>
                            <p><a href="#">github.com/${this.github}</a></p>
                              
                              <p></p>
                            </div>
                          </div>
                        `;

if (document.getElementById("card") != null) {
  var idPost = document.getElementById("card").innerHTML += template;
}