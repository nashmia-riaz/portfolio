$(function(){
  var filter = getUrlParameter("filter");
  LoadProjects(filter);
})

var projectsLoaded = 0;

function LoadProjects(filter){
  $(".container").load("snippets/project-thumbnail.html", function(responseTxt, statusTxt, jqXHR){
    if(statusTxt == "error"){
        alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
    }else{
      var projectsContent = "<div class=\"row\">";
      for(var i = 0; i < projects.length; i++){
        if(filter && filter != "All"){
          var tags = projects[i].Tags.split(",");
          tags.forEach(function(currentValue, index, arr){

            if(filter == currentValue){
              projectsContent+=LoadProject(i, responseTxt);
            }

          });
        }
        else{
            projectsContent+=LoadProject(i, responseTxt);
        }

        if(projectsLoaded %3 == 0){
          projectsContent+= "</div><div class='row'>";
        }
      }

      if(projectsLoaded % 3 == 0 && projectsLoaded > 0){
        //break the row here
        projectsContent+= "</div>";
      }

      //fill empty space with empty columns
      if(projectsLoaded % 3 != 0 && projectsLoaded > 0){
        for(var i = 0; i < 3 - (projectsLoaded % 3); i++){
          console.log("Adding div");
          projectsContent+= "<div class='col'></div>";
        }
      }

      projectsContent+= "</div>";
      $("#projects-grid").html(projectsContent);
    }
  });

  projectsLoaded = 0;
}

function LoadProject(i, responseTxt){
    projectsLoaded++;

    var projectToAdd = responseTxt.replace("{{project-link}}", i);
    projectToAdd = projectToAdd.replace("{{type}}", projects[i].Type);
    projectToAdd = projectToAdd.replace("{{thumbnail-image}}", projects[i].Thumbnail);

    return projectToAdd;
}
