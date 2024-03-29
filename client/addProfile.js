Template.addProfile.events({
    'click .js-save'(event){
        //grabs data from html page
        let profPic = $('#profPic').val();
        let profFirst = $('#firstName').val();
        let profLast = $('#lastName').val();
        let profAge = $('#age').val();
        let profGen = $('input[name="genderRadio"]:checked').val();
        
        //reset each input box
        let formGood = true;
        $("#profPic").removeClass("invalidWarn");
        $("#firstName").removeClass("invalidWarn");
        $("#lastName").removeClass("invalidWarn");
        $("#age").removeClass("invalidWarn");
        if (profPic == ""){
            $("#profPic").addClass("invalidWarn");
            formGood = false;
        }
        if (profFirst == ""){
            $("#firstName").addClass("invalidWarn");
            formGood = false;
        }
        if (profLast == ""){
            $("#lastName").addClass("invalidWarn");
            formGood = false;
        }
        if(profAge == ""){
            $("#age").addClass("invalidWarn");
            formGood = false;
        }
        if (formGood == true){
            
            //save data into collection
            profilesdb.insert({
                "pPic":profPic,
                "pFirst":profFirst,
                "pLast":profLast,
                "pAge":profAge,
                "pGen":profGen,
                "pOwn":Meteor.userId()
            });
            //clear input boxes
            document.getElementById("preImg").src = "blankprofile.png";
            $('#profPic').val("");
            $('#firstName').val("");
            $('#lastName').val("");
            $('#age').val("");
            $('#addModal').modal('hide');
        }
    },
    'input #profPic'(event){
        let profPic = $('#profPic').val();
        document.getElementById("preImg").src = profPic;
       }
});