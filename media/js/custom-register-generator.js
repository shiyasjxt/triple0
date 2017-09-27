!(function ($) {
$(document).ready(function() {
    // Pulling Dropdown Values
    var domain = 'https://www.triple0.com';

    var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    for( var m=0; m<monthArr.length; m++ ){
    	$('#cq_didwork_month, #cq_willwork_month').append( $('<option>', {
    		value: monthArr[m],
			text: monthArr[m]
    	}));
    }

    //Custom question
    // $.ajax({
    //     type: "GET",
    //     cache: false,
    //     url: domain + "/jxtmethods.asmx/GetCustomQuestions",

    //     success: function(msg) {
    //         console.log(msg);
    //         var result = $.parseJSON(msg);
    //         $.each(result.Data, function(i, item) {
    //             var questionId = item.Value,
    //              questionDetail = $.parseJSON(item.Text),
    //              title = questionDetail.Title,
    //              type = questionDetail.Type,
    //              sequence = questionDetail.Sequence,
    //              mandatory = questionDetail.Mandatory,
    //              dt = new Date(),
    //              currYear = dt.getFullYear();
                 
    //             if( title == 'Country Code' ){
    //             	$.each(questionDetail.Parameters, function(j, param) {
				// 		//console.log(param);                		
    //             		var txt = param.replace(/"/g,"");

    //             		$('#countrycode').append($('<option>', {
				// 			value: j + 1,
				// 			text: txt
    //                     }));
    //             	});
    //             }
    //             else if( title == 'Doctor Type' ){
    //               $.each(questionDetail.Parameters, function(j, param) {
    //                    	//console.log(param);
    
				// 		var txt = param.replace(/"/g,"");
    //                     var tabindex = 8 + j;		
						
    //                   	$('#docTypeOptions').append('<li><input value="'+ (j + 1) +'" type="'+ type +'" name="'+ questionId +'" id="docType-' + j +'" tabindex="'+tabindex+'"><label for="docType-'+j +'">'+ txt+'</label></li>');
    //               });
    //               $('#docTypeOptions').append( $('#docTypeOptions .error-msg').parent() );

    //             }
    //             else if( title == 'Country of primary medical degree' ){
				// 	$.each(questionDetail.Parameters, function(j, param) {
				// 		//console.log(param);                		
    //             		var txt = param.replace(/"/g,"");

    //             		$('#cq_countryPrimaryDegree').append($('<option>', {
				// 			value: j + 1,
				// 			text: txt
    //                     }));
    //             	});
    //             }
    //             else if( title == 'Preferred location'){
				// 	$.each(questionDetail.Parameters, function(j, param) {
				// 		//console.log(param);                		
    //             		var txt = param.replace(/"/g,"");

    //             		$('#cq_preferedLocation').append($('<option>', {
				// 			value: j + 1,
				// 			text: txt
    //                     }));
    //             	});
    //             }
    //             else if( title == 'Didwork year'){
    //             	for( var k = currYear; k>=currYear-30; k-- ){
    //                 	$('#cq_didwork_year').append($('<option>', {
				// 			value: k,
				// 			text: k
    //                     }));
    //             	}
    //             }
    //             else if( title == 'Willwork year'){
    //                 for( var k = currYear; k<=currYear+30; k++ ){
    //                     $('#cq_willwork_year').append($('<option>', {
    //                         value: k,
    //                         text: k
    //                     }));
    //                 }
    //             }
    //             else if( title == 'Country worked most in last 4 years' ){
    //                 $.each(questionDetail.Parameters, function(j, param) {
    //                     //console.log(param);                       
    //                     var txt = param.replace(/"/g,"");

    //                     $('#cq_countryWorkedIn').append($('<option>', {
    //                         value: j + 1,
    //                         text: txt
    //                     }));
    //                 });
    //             }
    //             else if( title == 'Duration of work in this country' ){
    //               $.each(questionDetail.Parameters, function(j, param) {
    //                     //console.log(param);
    //                     var txt = param.replace(/"/g,"");       
                        
    //                     $('#cq_workDuration').append('<li><input value="'+ (j + 1) +'" type="'+ type +'" name="'+ questionId +'" id="'+ questionId +'-' + j +'"><label for="'+ questionId+ '-'+j +'">'+ txt+'</label></li>');
    //               });
    //             }
    //             else if( title == 'Completed USMLE 1 &amp; 2, IELTS or PLAB 1 &amp; 2?' ){
    //               $.each(questionDetail.Parameters, function(j, param) {
    //                     //console.log(param);
    //                     var txt = param.replace(/"/g,"");       
                        
    //                     $('#cq_MedTest').append('<li><input value="'+ (j + 1) +'" type="'+ type +'" name="'+ questionId +'" id="'+ questionId +'-' + j +'"><label for="'+ questionId+ '-'+j +'">'+ txt+'</label></li>');
    //               });
    //             }
    //             //end of condition


    //             //condition based show hide element
    //             //================================================================

    //             // show the date fields on the base of Doctor type options clicked
    //             $("input[id*=docType]:radio").click(function () {
    //               if( $('#docType-0:checked').length ){
    //                 $('.didwork').removeClass('hidden');
    //                 $('.willwork').addClass('hidden');
    //               }else if( $('#docType-3:checked').length ){
    //                 $('.didwork').addClass('hidden');
    //                 $('.willwork').removeClass('hidden');
    //               }else{
    //                 $('.didwork').addClass('hidden');
    //                 $('.willwork').addClass('hidden');
    //               }
    //             });

    //             //country of study
    //             $('#cq_countryPrimaryDegree').change( function(){
    //                 if( $(this).find('option:selected').text() == 'Other' ){
    //                     $('.otherpmd').removeClass('hidden');
    //                 }else{
    //                     $('.otherpmd').addClass('hidden');
    //                 }
    //             });



    //         });
    //     },
    //     fail: function() {
    //         alert('failed');
    //     }
    // });

    //Profession
    $.ajax({
        type: "GET",
        cache: false,
        url: domain + "/jxtmethods.asmx/GetSiteProfession",

        success: function(msg) {
            //console.log(msg);
            var result = $.parseJSON(msg);
            if (result.Success) {
                // Add Grade into dropdown
                $.each(result.Data, function(i, item) {
                    $('#profession').append($('<option>', {
                        value: item.Value,
                        text: item.Text
                    }));
                });

                $('#profession').change(function() {
                    // Clean up roles
                    $('#specialty').empty();
                    $('#roletext').val('');

                    if ($('#profession').val() != "") {
                        $('#professiontext').val($('#profession option:selected').text());
                        $('#specialty').append($('<option>', {
                            value: "",
                            text: "Select Specialty"
                        }));

                        $.ajax({
                            type: "POST",
                            cache: false,
                            url: domain + "/jxtmethods.asmx/GetSiteRole",
                            data: {
                                "professionid": $('#profession').val()
                            },
                            success: function(msg) {
                                //console.log(msg);
                                var result = $.parseJSON(msg);
                                if (result.Success) {
                                    // Add Professions into dropdown
                                    $.each(result.Data, function(i, item) {
                                        $('#specialty').append($('<option>', {
                                            value: item.Value,
                                            text: item.Text
                                        }));
                                    });

                                    $('#specialty').change(function() {
                                        if ($('#specialty').val() != "") {
                                            $('#roletext').val($('#specialty option:selected').text());
                                        } else {
                                            $('#roletext').val('');
                                        }
                                    });
                                }
                            },
                            fail: function() {
                                alert('failed');
                            }
                        });
                    } else {
                        $('#professiontext').val('');
                        $('#specialty').append($('<option>', {
                            value: "",
                            text: "Please Choose a Grade"
                        }));
                    }

                });
            }
        },
        fail: function() {
            alert('failed');
        }
    });

    //Location
    $.ajax({
        type: "GET",
        cache: false,
        url: domain + "/jxtmethods.asmx/GetSiteCountries",

        success: function(msg) {
            //console.log(msg);
            var result = $.parseJSON(msg);
            if (result.Success) {
                // Add Grade into dropdown
                $.each(result.Data, function(i, item) {
                    $('#location').append($('<option>', {
                        value: item.Value,
                        text: item.Text
                    }));
                });

                $('#location').change(function() {
                    // Clean up roles
                    $('#specialty').empty();
                    $('#roletext').val('');

                    if ($('#location').val() != "") {
                        $('#locationtext').val($('#location option:selected').text());
                        $('#specialty').append($('<option>', {
                            value: "",
                            text: "Select Specialty"
                        }));

                        $.ajax({
                            type: "POST",
                            cache: false,
                            url: domain + "/jxtmethods.asmx/GetSiteRole",
                            data: {
                                "professionid": $('#location').val()
                            },
                            success: function(msg) {
                                //console.log(msg);
                                var result = $.parseJSON(msg);
                                if (result.Success) {
                                    // Add Professions into dropdown
                                    $.each(result.Data, function(i, item) {
                                        $('#specialty').append($('<option>', {
                                            value: item.Value,
                                            text: item.Text
                                        }));
                                    });

                                    $('#specialty').change(function() {
                                        if ($('#specialty').val() != "") {
                                            $('#roletext').val($('#specialty option:selected').text());
                                        } else {
                                            $('#roletext').val('');
                                        }
                                    });
                                }
                            },
                            fail: function() {
                                alert('failed');
                            }
                        });
                    } else {
                        $('#locationtext').val('');
                        $('#specialty').append($('<option>', {
                            value: "",
                            text: "Please Choose a Grade"
                        }));
                    }

                });
            }
        },
        fail: function() {
            alert('failed');
        }
    });

    //validation
    //check empty
    function checkEmpty(obj){
        if( obj.val() == "" ){
            if( obj[0].nodeName == 'SELECT' ){
                obj.parent().addClass('hasError');
            }else{
                obj.addClass('hasError');    
            }
            obj.next('.error-msg').removeClass('hidden');
            return false;
        }else{
            if( obj[0].nodeName == 'SELECT' ){
                obj.parent().removeClass('hasError');
            }else{
                obj.removeClass('hasError');
            }
            obj.next('.error-msg').addClass('hidden');
        }
    }

    function checkSelctBlur(obj){
        if( obj.val() != '' ){
            obj.parent().removeClass('hasError');
            obj.next('.error-msg').addClass('hidden');
        }else{
            obj.parent().addClass('hasError');
            obj.next('.error-msg').removeClass('hidden');
            return false;    
        }
    }

    //first name & surname
    $('#firstname, #surname').blur( function(){
        checkEmpty( $(this) );
    });

    //email
    $('#email').blur( function(){
        var pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
        if( pattern.test( $(this).val() ) ){
            $(this).removeClass('hasError');
            $(this).next('.error-msg').addClass('hidden');
        }else{
            $(this).addClass('hasError');
            $(this).next('.error-msg').removeClass('hidden');
            return false;    
        }
    });

    //password strength
    var strenghVal      = 0;
   
    function check_strength(thisval){
        var exp_strength = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');

        if (thisval.match(exp_strength)) { strenghVal = 4} else { strenghVal = 0};

        if( strenghVal < 4 ){ $('#createPassword').removeClass().addClass('weak'); }
        else { $('#createPassword').removeClass().addClass('strong'); }        
    }
    $('#createPassword').keyup( function(){
        check_strength( $(this).val() );   
    });
    $('#createPassword').blur( function(){
        if( strenghVal == 4 ){
            $(this).removeClass('hasError');
            $(this).next('.error-msg').addClass('hidden');
        }else{
            $(this).addClass('hasError');
            $(this).next('.error-msg').removeClass('hidden');
            return false;   
        }
    });

    //confirm password
    $('#confirmPassword').blur( function(){
        if( $(this).val() == $('#createPassword').val() ){
            $(this).removeClass('hasError');
            $(this).next('.error-msg').addClass('hidden');
        }else{
            $(this).addClass('hasError');
            $(this).next('.error-msg').removeClass('hidden');
            return false;    
        }
    });

    //country code
    $('select.reqfield').blur( function(){
        checkSelctBlur( $(this) );
    });
    $('#countrycode').change( function(){
        if( $(this).val() == "Other" ){
            $('.cc-error-msg').removeClass('hidden');
        }else{
            $('.cc-error-msg').addClass('hidden');
        }
    });

    //doctor type
    $('#docTypeOptions input').blur( function(){
        if( $('#docTypeOptions input:checked').val() != undefined ){
            $('#docTypeOptions .error-msg').parent.addClass('hidden');
        }
    });


    //phone number
    function validatePhone(obj){
        var normPhonePattern = new RegExp("[0-9]{9}");
        if( normPhonePattern.test( obj.val() ) == false ){
            return false;
        }else{
            return true;
        }
    }
    $('#mobilePhone').blur( function(){9
        if( validatePhone( $(this) ) ){
            $(this).removeClass('hasError');
            $(this).next('.error-msg').addClass('hidden');
        }else{
            $(this).addClass('hasError');
            $(this).next('.error-msg').removeClass('hidden');
            $(this).focus();
            // $('#remFields').addClass('hidden');
            // $('#fakebtn').removeClass('hidden');
            return false; 
        }
    });
    $('#mobilePhone').keyup( function(){
        if( validatePhone( $(this) ) ){
            $(this).removeClass('hasError');
            $(this).next('.error-msg').addClass('hidden');
            $('#remFields').removeClass('hidden');
            $('#fakebtn').addClass('hidden');
        }
    });

    $('#fakebtn').click(function() {
        var flag = true;
        $('ul.register-form input').each( function(){
            if( checkEmpty( $(this) ) == false ){
                flag = false;
            }
        }); 
        if( checkEmpty( $('#countrycode') ) == false ){
            flag = false;
        }
        if( flag == false ){
            $('.hasError').first().focus();
            return false;
        }else{
            $('#remFields').removeClass('hidden');
            $(this).addClass('hidden');
        }      
    });

    //Popup info conditions
    // $('#cq_countryWorkedIn').change( function(){
    //     if( $(this).find('option:selected').text() == "Other" || $('#cq_workDuration #customquestion_radio_10-3:checked').length > 0 ){
    //         $('#registerModal').modal('show');
    //         $('#regSubmit').attr('disabled','disabled');
    //     }else{ //enable the sumbmit button
    //         $('#regSubmit').removeAttr('disabled');
    //     }
    // });
    // $('body').on('click', '#cq_workDuration input[type="radio"]', function(){
    //     if( $(this).attr('id') == "customquestion_radio_10-3" || $('#cq_countryWorkedIn option:selected').text() == "Other" ){
    //         $('#registerModal').modal('show');    
    //         $('#regSubmit').attr('disabled','disabled');
    //     }else{
    //         $('#regSubmit').removeAttr('disabled');
    //     } 
    // });
    

    $('#regSubmit').click(function() {
        var data = new FormData();

        var firstname = $('#firstname').val(),
            surname = $('#surname').val(),
            mobilephone = $('#mobilePhone').val(),
            email = $('#email').val(),
            confirmemail = email,
            username = $('#email').val(),
            password = $('#createPassword').val(),
            confirmpassword = $('#confirmPassword').val(),
            profession = $('#profession').val(),
            location = $('#location').val();
            // role = $('#specialty').val(),
            // professiontext = $('#professiontext').val(),
            // roletext = $('#roletext').val();

        //custom questions    
        // var countrycode = $('#countrycode').val(),
        //     docType = $('input[name="customquestion_radio_2"]').val(),
        //     didworkYear = '',
        //     didworkMonth = '',
        //     willworkYear = '',
        //     willworkMonth = '',
        //     countryOfStudy = $('#cq_countryPrimaryDegree').val(),
        //     countryOfStudyTxt = $('#cq_countryPrimaryDegree option:selected').text(),
        //     countryOfWork = '',
        //     workDuration = '',
        //     otherpmd = '',
        //     preferedLocation = $('#cq_preferedLocation').val();

        //based on doctor type
        // if( docType == 'Non-specialist / SMO' ){
        //     didworkYear = $('#cq_didwork_year').val();
        //     didworkMonth = $('#cq_didwork_month').val();
        // }else if( docType == 'Medical Student' ){
        //     willworkYear = $('#cq_willwork_year').val();
        //     willworkMonth = $('#cq_willwork_month').val();
        // }

        //based on country study/degree
        // if( countryOfStudyTxt == 'Other' ){
        //     countryOfWork = $('#cq_countryWorkedIn').val();
        //     workDuration = $('#cq_workDuration input[name="customquestion_radio_10"]').val();
        //     otherpmd = $('#cq_MedTest input[name="customquestion_radio_11"]').val();
        // }

        //final validation
        $('.reqfield').each( function(){
            checkEmpty( $(this) );
        }); 

        // if( $('#docTypeOptions input[name="customquestion_radio_2"]:checked').val() == undefined ){
        //     $('#docTypeOptions .error-msg').parent().removeClass('hidden');
        //     return false;
        // }


        // Assgin Default Value
        data.append("title", "Mr");
        data.append("emailformat", "1");
        data.append("dateofbirth", "");
        data.append("firstname", (firstname) ? firstname : "");
        data.append("surname", (surname) ? surname : "");

        data.append("email", (email) ? email : "");
        data.append("confirmemail", (email) ? email : "");
        data.append("username", (username) ? username : "");
        data.append("password", (password) ? password : "");
        data.append("confirmpassword", (confirmpassword) ? confirmpassword : "");

        data.append("homephone", "");
        data.append("workphone", "");
        data.append("mobilephone", (mobilephone) ? mobilephone : "");
        
        data.append("address", "");
        data.append("suburb", "");
        data.append("postcode", "");
        data.append("state", "");
        data.append("country", (location) ? location : "");
        data.append("mailingaddress", "");
        data.append("mailingpostcode", "");
        data.append("mailingstate", "");
        data.append("mailingsuburb", "");
        data.append("mailingcountry", "");
        data.append("profession", (profession) ? profession : "");
        // data.append("role", (role) ? role : "");
        
        data.append("passport", "");
        data.append("language", "1");
        
        //custom questions
        // data.append("customquestion_dropdown_1", (countrycode) ? countrycode : "");
        // data.append("customquestion_radio_2", (docType) ? docType : "");
        // data.append("customquestion_dropdown_3", (countryOfStudy) ? countryOfStudy : "");
        // data.append("customquestion_dropdown_4", (preferedLocation) ? preferedLocation : "");
        // data.append("customquestion_textbox_5", (didworkYear) ? didworkYear : "");
        // data.append("customquestion_textbox_6", (didworkMonth) ? didworkMonth : "");
        // data.append("customquestion_textbox_7", (willworkYear) ? willworkYear : "");
        // data.append("customquestion_textbox_8", (willworkMonth) ? willworkMonth : "");
        // data.append("customquestion_dropdown_9", (countryOfWork) ? countryOfWork : "");
        // data.append("customquestion_radio_10", (workDuration) ? workDuration : "");
        // data.append("customquestion_radio_11", (otherpmd) ? otherpmd : "");


        // Post To Web Service

        $.ajax({
            type: "POST",
            cache: false,
            url: domain + "/jxtmethods.asmx/MemberRegister",
            data: data,
            contentType: false,
            processData: false,
            success: function(msg) {
                console.log(msg);
                var result = $.parseJSON(msg);
                if( result.Success ){
                    $('.large-7').hide();
                    $('.reg-success-msg').removeClass('hidden');    
                    $('.reg-success-msg .mem-name').text( firstname );
                }else{
                    console.log(result.Error);
                    $.each(result.Error, function(j, param) {
                        if( param.Name == "password" ){
                            $('#createPassword, #confirmPassword').val("");

                            $('#createPassword').focus().removeClass().parent().find('.error-msg').removeClass('hidden');
                        }else if( param.Name == "email" ){
                            var errMsg = param.Message;
                            if( errMsg.indexOf("already exists") >-1 ){
                                errMsg += " <br> Or, Login with your existing username.";
                                $('.email-error-msg').removeClass('hidden').find('small').html(errMsg);
                            }
                        }
                        else if( param.Name == "username" ){
                            var errMsg = param.Message;
                            if( errMsg.indexOf("already exists") >-1 ){
                                $('#username').addClass('hasError').focus();
                                $('#username').next('.error-msg').removeClass('hidden').text(errMsg);
                            }    
                        }
                    });
                }
                
            },
            fail: function() {
                alert('Registration failed.');
            }
        });

    });
});
})(jQuery);