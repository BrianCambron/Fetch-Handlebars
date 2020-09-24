fetch('https://api.github.com/users/BrianCambron')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let avatar_url = data.avatar_url;
    let name = data.names;
    let login = data.login;
    let followers_url = data.followers_url;
    let following_url = data.following_url;
    let starred_url = data.starred_url;
    // console.log(following_url);
    // console.log(starred_url);
    // console.log(starred_url);

    // .catch(error => console.log(error));
    const source = document.getElementById("entry-template").innerHTML;
    // console.log('source', source);
    const template = Handlebars.compile(source);
    const context = {
      avatar_url: data.avatar_url,
      name: data.name,
      login: data.login,
      followers_url: data.followers_url,
      following_url: data.following_url,
      starred_url: data.starred_url,
    };
    const html = template(context);
    // console.log(html);
    document.querySelector('.container').innerHTML = html;
  });
  fetch('https://api.github.com/users/BrianCambron/orgs')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let avatar_url2 = data[0].avatar_url;
    console.log(avatar_url2);
    const source = document.getElementById("org-template").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
      avatar_url2: data[0].avatar_url,
    };
    const html = template(context);
    document.querySelector('.container-1').innerHTML = html;
  });
  fetch('https://api.github.com/users/BrianCambron/repos')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const source = document.getElementById("repo-template").innerHTML;
      // console.log('source', source);
      const template = Handlebars.compile(source);
      const context = {
          repos:data,
      };
      const html = template(context);
      // console.log(html);
      document.querySelector('.container-2').innerHTML = html;
  });
