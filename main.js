fetch('https://api.github.com/users/BrianCambron')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let avatar_url = data.avatar_url;
    let name = data.names;
    let login = data.login;

    // .catch(error => console.log(error));
    const source = document.getElementById("entry-template").innerHTML;
    // console.log('source', source);
    const template = Handlebars.compile(source);
    const context = {
      avatar_url: data.avatar_url,
      name: data.name,
      login: data.login,
    };
    const html = template(context);
    // console.log(html);
    document.querySelector('.container').innerHTML = html;
  });
