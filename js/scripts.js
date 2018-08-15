let sponsors = JSON.parse(sponsorJson);

let addSponsors = () => {
  sponsors.forEach(sponsor => {
  
      let image = $('<img>');
      image.attr('src', 'imgs/logos/2018/' + sponsor.logo);
      image.attr('title', sponsor.name);

      let link = $('<a>');
      link.attr('href', sponsor.url);
      link.attr('target', '_blank');
      link.addClass(sponsor.tier + ' ' + sponsor.name.toLocaleLowerCase().replace(/ /gi, '-'));

      link.append(image);

      $('#' + sponsor.tier +'-sponsors').append(link);
  });
}