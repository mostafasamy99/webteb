




// m7md //
// miniHome , miniDrugs , miniDesases , healthBeauty , medicalHealth -->> id bto3 el navBar

// upperNAV ,bottomNAV ,HOME , DRUGS,diseases , ELRAGEL ,WOMANsymptom -->> id bto3 el sections

// unHomme رجل , leFemme المراه , leEnfant الطفل -->> man,woman,child -id-





///////////////////////////////////////////////


// navBar FIXED TOP

// let naving = $(".bottmNav").offset().top;

// $(window).scroll(function(){

//   let scrollTop = $(window).scrollTop();
 
  
//   if(scrollTop > naving)
//   {
//     $(".upperNav").css("display","none");
//     $(".bottmNav").css("position","fixed").css("backgroundColor","rgba(78, 125, 141,0.8)");
//   }
//   else
//   {
//    $(".upperNav").css("display","block");
//    $(".bottmNav").css("position","relative").css("backgroundColor","rgba(78, 125, 141,1)");
//   }
 
 
//  });





// signUP data
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var rePassword = document.getElementById("rePassword");

var signInBtn = document.getElementById("signInBtn");
//

// signIN data

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

var loginBtn = document.getElementById("loginBtn");
//

var loginValidation = JSON.parse(localStorage.getItem("userData"));

var newArray;
if(localStorage.getItem("userData")== null)
{
  newArray = [];
}
else
{
    newArray = JSON.parse(localStorage.getItem("userData"));
}

loginBtn.onclick = function()
{
  loginValidation = JSON.parse(localStorage.getItem("userData"));
  var booleanValid= false;
  for(let i = 0 ; i < loginValidation.length ; i++)
  {
    if(loginEmail.value == loginValidation[i].useremail && loginPassword.value == loginValidation[i].userpassword)
    {
      alert("تم تسجيل الدخول بنجاح");
       booleanValid=true; 
    }
  }
    if(!booleanValid){
        alert("اسم المستخدم أو كلمة المرور غير صالحة");
    }
        

}




signInBtn.onclick = function()
 {
    
    if(firstName.value !="" && lastName.value!="" && userEmail.value!="" && userPassword.value!="" && rePassword.value!="")
    {
        
  var users = 
      {
        fristname : firstName.value,
        lastname  : lastName.value,
        useremail : userEmail.value,
        userpassword : userPassword.value,
        repassword : rePassword.value
      }
      newArray.push(users);

      localStorage.setItem("userData",JSON.stringify(newArray));
        // clear();
        alert("تم السجيل ! مرحبا بك في موقعنا الطبي")
    }
    else{alert("يرجي التحقق من ملئ جميع البيانات!");}
    
 }

  
function clear()
{
    firstName="";
    lastName="";
    userEmail="";
    userPassword="";
    rePassword="";
}

function kalba(id){
    $('.menu').removeClass('active');
    $(id).addClass('active');
}




$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});





