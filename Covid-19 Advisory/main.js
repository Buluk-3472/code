$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
    
class User {
constructor(name, age, contact, symptoms){ //parametros del usuario
    this.name = name;
    this.age = age;
    this.contact = contact; 
    this.symptoms = symptoms
    }
}

class UI{
    resetForm(){
        document.getElementById('diagnostic-form').reset();
        this.resetForm();
    }
    
    }

//DOM Events cuando un usuario da click a algún botón, typea, carga
document.getElementById('diagnostic-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value; 
    const symptom = document.getElementById('symptoms').value;
    const contact = document.getElementById('contact').value;
    console.log(name, age, contact, symptom);
 
    switch(symptom){
        case "Yes" :
            alert('If you have more than 5 symptoms please call for professional aid')
            break;
        case "No" :
            alert('Stay at home and take preventive measures')
            break;
    }
    
    const ui = new UI();
    ui.resetForm();
    
    e.preventDefault();
 
     }
)
});

