let sponsors = JSON.parse(sponsorJson);

let addSponsors = () => {
  sponsors.forEach(sponsor => {
    let image = $("<img>");
    image.attr("src", "imgs/logos/2018/" + sponsor.logo);
    image.attr("title", sponsor.name);

    let link = $("<a>");
    link.attr("href", sponsor.url);
    link.attr("target", "_blank");
    link.attr("title", sponsor.name);
    link.addClass(
      sponsor.tier + " " + sponsor.name.toLocaleLowerCase().replace(/ /gi, "-")
    );

    link.append(image);

    $("#" + sponsor.tier + "-sponsors").append(link);
  });
};

let createSchedule = () => {
  let converter = new showdown.Converter();

  let events = JSON.parse(eventsJson);
  events.sort((eventOne, eventTwo) => eventOne.start - eventTwo.start);

  let $panel = $("#event-description");
  let $eventList = $("#events-list");

  let defaultPanelText = `### ShellHacks 2018 Event Schedule

  Click on events on the left to show an expanded description here
  `;

  $panel.html(converter.makeHtml(defaultPanelText));

  let currentDay = null;

  events.forEach(event => {
    let $eventElement = $(`
      <div class="event">
        <div class="location">
            <span class="room"></span>
            <span class="times"></span>
        </div>
        <h4></h4>
        <div class="snippet"></div>
        <div class="description"></div>
      </div>
    `);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var startDate = new Date(event.start * 1000);
    var endDate = new Date(event.end * 1000);

    const prettyTime = (hours, minutes) => {
      let postfix = "AM";
      if (hours >= 12) {
        postfix = "PM";
        hours -= 12;
      }
      if (hours == 0) hours = 12;

      return minutes > 0
        ? hours + ":" + minutes + " " + postfix
        : hours + " " + postfix;
    };

    $eventElement
      .find(".description")
      .html(converter.makeHtml(event.description));
    $eventElement
      .find(".snippet")
      .html($eventElement.find(".description")[0].innerText);
    $eventElement.find(".room").html(event.room);
    let startTime = prettyTime(startDate.getHours(), startDate.getMinutes());

    let endTime =
      startDate.getDay() != endDate.getDay()
        ? daysOfWeek[endDate.getDay()].substr(0, 3) +
          " " +
          prettyTime(endDate.getHours(), endDate.getMinutes())
        : prettyTime(endDate.getHours(), endDate.getMinutes());

    $eventElement.find(".times").html(startTime + " - " + endTime);
    $eventElement.find("> h4").html(event.title);

    $eventElement.on("click", e => {
      $(".event").removeClass("selected");
      $(e.currentTarget).addClass("selected");

      let title = $("<h3>");
      title.html(
        $(e.currentTarget)
          .find("h4")
          .html()
      );
      let descriptionHTML = $(e.currentTarget)
        .find(".description")
        .html();
      $panel.html(descriptionHTML);
      $panel.prepend(title);
    });

    if (!currentDay || currentDay.getDay() != startDate.getDay()) {
      $eventList.append(
        `<h3>${daysOfWeek[startDate.getDay()]}, ${
          monthNames[startDate.getMonth()]
        } ${startDate.getDate()}</h3>`
      );
      currentDay = new Date(startDate);
    }

    $eventList.append($eventElement);
  });
};

// $(() => {

// });
