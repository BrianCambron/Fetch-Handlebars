fetch('https://api.github.com/users/BrianCambron')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let avatar_url = data.avatar_url;

    // .catch(error => console.log(error));
    const source = document.getElementById("entry-template").innerHTML;
    // console.log('source', source);
    const template = Handlebars.compile(source);
    const context = {
      avatar_url: data.avatar_url
    };
    const html = template(context);
    console.log(html);
    document.querySelector('.container').innerHTML = html;
  })
