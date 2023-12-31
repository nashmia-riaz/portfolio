$(function(){
  console.log("Ready");
  var index = getUrlParameter("index");
  var project = projects[index];
  LoadProject(project);
})

function LoadProject(project){
  $("#project-name").html(project.Name.toUpperCase());

  $("#project-tagline").html(project.Headline);

  // var tags = project.Tags.split(",");
  // var tagsToAdd="";
  // tags.forEach(function(currentValue, index, arr){
  //   tagsToAdd+= "<div class=\"tag\">"+currentValue+"</div>";
  // });
  // $("#tags").html(tagsToAdd);

  $("#project-role").html(project.Details.Role);
  $("#project-team-size").html(project.Details.TeamSize);
  $("#project-duration").html(project.Details.Duration);
  $("#project-stack").html(project.Details.Tech);

  $("#project-screenshot").html("<img src=\""+project.MainScreenshot+"\">")

  var linksToAdd = "";
  project.Links.forEach(function(currentValue, index, arr){
    linksToAdd += '<a href="'+currentValue.Link+'" class="playstore-link"><img src="'+currentValue.Image+'" alt="">'+currentValue.Text+'</a>'
  });
  $("#project-links").html(linksToAdd);

  $("#project-description").html(project.Description);
}
