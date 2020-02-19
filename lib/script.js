
$("#form_id").submit(function (e) {

    e.preventDefault();
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Estamos em manutenção!',
        confirmButtonColor: '#6c757d'
      })

});

function mdDay(){

  var lin = document.getElementById("lin");
  var lin1 = document.getElementById("lin1");
  var lin2 = document.getElementById("lin2");
  var lin3 = document.getElementById("lin3");
  var bgCenter = document.getElementById("bgCenter");
  var bg = document.getElementById("bg");
  var btnId = document.getElementById("btnId");
  var i = document.getElementById("i");
  var i1 = document.getElementById("i1");
  var i2 = document.getElementById("i2");
  var i3 = document.getElementById("i3");
  var i4 = document.getElementById("i4");
  var i5 = document.getElementById("i5");
  var i6 = document.getElementById("i6");
  var i7 = document.getElementById("i7");
  var i8 = document.getElementById("i8");
  var grp = document.getElementById("grp");
  var grp1 = document.getElementById("grp1");
  var grp2 = document.getElementById("grp2");
  var grp3 = document.getElementById("grp3");

  bgCenter.classList.remove('bg2-center');
  bgCenter.classList.add('bg-center');

  lin.classList.remove('line2');
  lin.classList.add('line');
  lin1.classList.remove('line2');
  lin1.classList.add('line');
  lin2.classList.remove('line2');
  lin2.classList.add('line');
  lin3.classList.remove('line2');
  lin3.classList.add('line');
  
  btnId.classList.remove('btn-secondary');
  btnId.classList.add('btn-warning');
  grp.classList.remove('list-group-item-secondary');
  grp.classList.add('list-group-item-primary');
  grp1.classList.remove('list-group-item-secondary');
  grp1.classList.add('list-group-item-primary');
  grp2.classList.remove('list-group-item-secondary');
  grp2.classList.add('list-group-item-primary');
  grp3.classList.remove('list-group-item-secondary');
  grp3.classList.add('list-group-item-primary');
  

  bg.src = "./img/bg.png";

  i.classList.remove('text-secondary');
  i.classList.add('text-warning');
  i1.classList.remove('text-secondary');
  i1.classList.add('text-warning');
  i2.classList.remove('text-secondary');
  i2.classList.add('text-warning');
  i3.classList.remove('text-secondary');
  i3.classList.add('text-warning');
  i4.classList.remove('text-secondary');
  i4.classList.add('text-warning');
  i5.classList.remove('text-secondary');
  i5.classList.add('text-warning');
  i6.classList.remove('text-secondary');
  i6.classList.add('text-warning');
  i7.classList.remove('text-secondary');
  i7.classList.add('text-warning');
  i8.classList.remove('text-secondary');
  i8.classList.add('text-warning');
  
}

function mdNight(){

  var lin = document.getElementById("lin");
  var lin1 = document.getElementById("lin1");
  var lin2 = document.getElementById("lin2");
  var lin3 = document.getElementById("lin3");
  var bgCenter = document.getElementById("bgCenter");
  var bg = document.getElementById("bg");
  var btnId = document.getElementById("btnId");
  var i = document.getElementById("i");
  var i1 = document.getElementById("i1");
  var i2 = document.getElementById("i2");
  var i3 = document.getElementById("i3");
  var i4 = document.getElementById("i4");
  var i5 = document.getElementById("i5");
  var i6 = document.getElementById("i6");
  var i7 = document.getElementById("i7");
  var i8 = document.getElementById("i8");
  var grp = document.getElementById("grp");
  var grp1 = document.getElementById("grp1");
  var grp2 = document.getElementById("grp2");
  var grp3 = document.getElementById("grp3");

  lin.classList.remove('line');
  lin.classList.add('line2');
  lin1.classList.remove('line');
  lin1.classList.add('line2');
  lin2.classList.remove('line');
  lin2.classList.add('line2');
  lin3.classList.remove('line');
  lin3.classList.add('line2');

  bgCenter.classList.remove('bg-center');
  bgCenter.classList.add('bg2-center');

  btnId.classList.remove('btn-warning');
  btnId.classList.add('btn-secondary');

  grp.classList.remove('list-group-item-primary');
  grp.classList.add('list-group-item-secondary');
  grp1.classList.remove('list-group-item-primary');
  grp1.classList.add('list-group-item-secondary');
  grp2.classList.remove('list-group-item-primary');
  grp2.classList.add('list-group-item-secondary');
  grp3.classList.remove('list-group-item-primary');
  grp3.classList.add('list-group-item-secondary');

  bg.src = "./img/bg2.png";

  i.classList.remove('text-warning');
  i.classList.add('text-secondary');
  i1.classList.remove('text-warning');
  i1.classList.add('text-secondary');
  i2.classList.remove('text-warning');
  i2.classList.add('text-secondary');
  i3.classList.remove('text-warning');
  i3.classList.add('text-secondary');
  i4.classList.remove('text-warning');
  i4.classList.add('text-secondary');
  i5.classList.remove('text-warning');
  i5.classList.add('text-secondary');
  i6.classList.remove('text-warning');
  i6.classList.add('text-secondary');
  i7.classList.remove('text-warning');
  i7.classList.add('text-secondary');
  i8.classList.remove('text-warning');
  i8.classList.add('text-secondary');

}