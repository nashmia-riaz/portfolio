$(function(){
  var index = getUrlParameter("project");
  var project = projects[index];
  LoadArt(project);
});

function LoadArt(project){
  $("#images-carousel").load("../snippets/carousel.html", function(responseTxt, statusTxt, jqXHR){
    if(statusTxt == "error"){
        alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
    }else{
      var imagesToAdd="";
      project.Images.forEach(function(currentValue, index, arr){
        imagesToAdd+='<div class="carousel-item"><img class="d-block w-100" src="'+"../images/"+currentValue+'" alt="Third slide"></div>';
      });
      console.log(imagesToAdd);
      $("#art-carousel").html(imagesToAdd);
      $(".carousel-item").first().addClass("active");
      $('.carousel').carousel();
    }
  });


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
    linksToAdd += '<a href="'+currentValue.Link+'" class="tag playstore-link"><img src="'+currentValue.Image+'" alt="">'+currentValue.Text+'</a>'
  });
  $("#project-links").html(linksToAdd);

  $("#project-description").html(project.Description);
}
